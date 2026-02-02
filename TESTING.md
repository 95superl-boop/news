# TechHub News - 完整测试文档

本文档旨在指导开发人员和 QA 团队如何对 TechHub News 前端模版进行功能验证及 WordPress 集成模拟测试。

## 1. 模拟 WordPress 本地开发环境

在没有真实 WordPress 后台的情况下，您可以通过以下方式模拟 REST API：

### A. 使用 JSON Server (推荐)
1. 安装：`npm install -g json-server`
2. 运行：`json-server --watch test-data.json --port 3001`
3. 在代码中将 API 基础路径设置为：`http://localhost:3001`

### B. 拦截 Fetch 请求 (前端 Hack)
在 `main.ts` 或入口文件中添加如下逻辑：
```javascript
if (location.hostname === 'localhost') {
  const originalFetch = window.fetch;
  window.fetch = async (...args) => {
    if (args[0].includes('/wp-json/')) {
      return originalFetch('/test-data.json');
    }
    return originalFetch(...args);
  };
}
```

---

## 2. 交互功能测试用例 (Test Cases)

### T1: 快讯滚动功能测试
- **操作步骤**：
  1. 打开首页，观察顶部蓝色快讯条。
  2. 验证快讯是否每 5 秒自动向上滚动切换。
  3. 将鼠标悬停在快讯内容上，验证是否停止滚动。
  4. 鼠标移开，验证是否恢复自动滚动。
  5. 点击左右切换箭头，验证是否可以手动控制。
- **预期结果**：动画平滑，无卡顿，悬停逻辑准确。

### T2: 实时搜索建议测试
- **操作步骤**：
  1. 点击顶部搜索框并输入 "以太坊"。
  2. 等待 300ms（防抖时间），验证控制台或 UI 是否显示请求记录。
  3. 输入不满足 2 个字符的内容，验证是否不触发请求。
  4. 连续快速输入，验证是否只在最后一次停顿时发出请求。
- **预期结果**：请求频率受控，搜索逻辑符合预期。

### T3: 评论提交功能测试
- **操作步骤**：
  1. 进入任意文章详情页 (`single.html` / `#post/101`)。
  2. 滚动到底部评论区，输入一段文字。
  3. 点击“发表评论”按钮。
  4. 观察按钮状态（是否显示 Loading/禁用）及弹出提示。
- **预期结果**：模拟 AJAX 提交成功，表单清空，用户体验流畅。

---

## 3. 响应式与兼容性测试清单

### 响应式断点 (Responsive Check)
- [ ] **手机端 (<768px)**：
  - 汉堡菜单正常弹出/关闭。
  - 文章列表切换为单列，图片宽度 100%。
  - 侧边栏小部件下沉至正文下方。
- [ ] **平板端 (768px - 1024px)**：
  - 文章网格显示为 2 列。
  - 侧边栏隐藏或调整为卡片堆叠。
- [ ] **桌面端 (>1024px)**：
  - 标准 1280px 容器居中。
  - 左右侧边栏布局生效。

### 浏览器兼容性 (Cross-Browser)
- [ ] **Chrome (Latest)**：完美支持所有 CSS 变量和 Grid 布局。
- [ ] **Safari (iOS/macOS)**：验证 `backdrop-filter` 磨砂玻璃效果正常。
- [ ] **Firefox**：验证滚动条自定义样式。
- [ ] **Edge**：验证所有 JS 模块加载正常。

---

## 4. 核心性能指标要求 (KPIs)

| 指标名称 | 目标值 | 说明 |
| :--- | :--- | :--- |
| **FCP** (First Contentful Paint) | < 1.2s | 首次有内容渲染的时间 |
| **LCP** (Largest Contentful Paint) | < 2.0s | 最大元素渲染时间（通常是 Banner 图） |
| **CLS** (Cumulative Layout Shift) | < 0.05 | 页面布局偏移量，防止点击错误 |
| **TBT** (Total Blocking Time) | < 150ms | 主线程被 JS 阻塞的总时间 |

---

## 5. WordPress 集成注意事项
1. **路径引用**：所有静态资源（CSS/JS）请确保使用 `get_template_directory_uri()` 动态生成。
2. **REST API 安全**：生产环境下请为评论提交等接口添加 `X-WP-Nonce` 验证。
3. **性能**：开启 WordPress 原生的图片延迟加载 (`loading="lazy"`)，本主题已完美兼容此属性。
