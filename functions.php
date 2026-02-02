<?php
/**
 * TechHub News Theme Functions
 */

if ( ! function_exists( 'techhub_setup' ) ) :
    function techhub_setup() {
        add_theme_support( 'title-tag' );
        add_theme_support( 'post-thumbnails' );
        add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption' ) );
        
        register_nav_menus( array(
            'primary' => esc_html__( 'Primary Menu', 'techhub' ),
        ) );
    }
endif;
add_action( 'after_setup_theme', 'techhub_setup' );

/**
 * 注册快讯自定义文章类型
 */
function techhub_register_post_types() {
    register_post_type( 'flash_news', array(
        'labels' => array(
            'name' => __( '快讯', 'techhub' ),
            'singular_name' => __( '快讯', 'techhub' ),
        ),
        'public' => true,
        'show_in_rest' => true,
        'menu_icon' => 'dashicons-megaphone',
        'supports' => array( 'title', 'editor', 'excerpt', 'custom-fields' ),
    ) );
}
add_action( 'init', 'techhub_register_post_types' );

/**
 * 注入脚本与数据到 React
 */
function techhub_enqueue_scripts() {
    wp_enqueue_style( 'techhub-style', get_stylesheet_uri(), array(), '1.5.0' );
    
    // 载入入口 JS (假设通过 ESM 加载)
    wp_enqueue_script( 'techhub-main', get_template_directory_uri() . '/index.js', array(), '1.5.0', true );
    
    // 核心翻译与配置注入，使 WordPress 插件可翻译
    wp_localize_script( 'techhub-main', 'th_vars', array(
        'api_url' => esc_url_raw( rest_url() ),
        'site_name' => get_bloginfo( 'name' ),
        'logo_url' => get_theme_mod( 'custom_logo_url', '' ),
        'qr_url' => get_theme_mod( 'custom_qr_url', '' ),
        'translations' => array(
            'home' => __( '首页', 'techhub' ),
            'news' => __( '资讯', 'techhub' ),
            'flash' => __( '7x24 快讯', 'techhub' ),
            'share' => __( '生成分享图', 'techhub' ),
            'subscribe' => __( '订阅', 'techhub' ),
            'login' => __( '登录', 'techhub' ),
            'search' => __( '搜索关键词...', 'techhub' ),
            'popular' => __( '热门排行', 'techhub' ),
            'tags' => __( '热门标签', 'techhub' ),
            'viewAll' => __( '查看更多', 'techhub' ),
            'flashChannel' => __( '进入频道', 'techhub' ),
            'footerDesc' => __( 'TechHub.news 是全球领先的 Web3 资讯分发平台。', 'techhub' ),
            'related' => __( '相关推荐', 'techhub' ),
            'loadMore' => __( '加载更多', 'techhub' ),
        )
    ));
}
add_action( 'wp_enqueue_scripts', 'techhub_enqueue_scripts' );
