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
 * 注册快讯自定义文章类型 (CPT)
 */
function techhub_register_post_types() {
    register_post_type( 'flash_news', array(
        'labels' => array(
            'name' => __( '快讯', 'techhub' ),
            'singular_name' => __( '快讯', 'techhub' ),
            'add_new' => __( '发布快讯', 'techhub' ),
        ),
        'public' => true,
        'show_in_rest' => true,
        'menu_icon' => 'dashicons-megaphone',
        'supports' => array( 'title', 'editor', 'excerpt', 'custom-fields' ),
    ) );
}
add_action( 'init', 'techhub_register_post_types' );

/**
 * 载入资源并注入全局变量
 */
function techhub_enqueue_assets() {
    wp_enqueue_style( 'techhub-style', get_stylesheet_uri(), array(), '1.6.0' );
    
    // 载入 React 编译后的 JS 文件
    wp_enqueue_script( 'techhub-main', get_template_directory_uri() . '/index.js', array(), '1.6.0', true );
    
    // 注入配置与翻译，支持后端直接修改分享图资源
    wp_localize_script( 'techhub-main', 'th_vars', array(
        'api_url' => esc_url_raw( rest_url() ),
        'site_name' => get_bloginfo( 'name' ),
        'logo_url' => get_theme_mod( 'techhub_logo', '' ),
        'qr_url' => get_theme_mod( 'techhub_qr_code', '' ),
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
        )
    ));
}
add_action( 'wp_enqueue_scripts', 'techhub_enqueue_assets' );
