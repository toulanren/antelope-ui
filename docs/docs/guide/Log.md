# 更新日志

---

#### v2.2.8

日期: 2021-05-13

- 修复定时器在高帧率下的问题

#### v2.2.7

日期: 2021-05-07

- 新增盒子关于字体的 props： font、font-size、font-color、font-weight 属性，查阅：[Box 盒子属性](docs/components/mixins/Box.md)
- Svga 组件新增 autoload 控制数据加载的时机，查阅：[Svga](docs/components/basic/Svga.md)
- 移除 image-suffix、Avatar 组件的 frame-params

#### v2.2.6

日期: 2021-03-09

- 修复 Timer 在结束计时后反复设置过期时间导致 countdown-over 多次触发的问题
- 修复 Svga 设置百分比宽高导致的不居中对齐问题
- 修复 Dialog 多开时关闭一个就导致底部滚动的问题
- Dialog 新增 $open 和 $close 方法，参考：[Dialog](docs/components/interact/Dialog.md)
- 优化背景图的显示问题

#### v2.2.5

日期: 2021-01-22

- 修复在单独引入 Svga 组件时，获取 \$route.meta.assetsProperty 为 undefined 的问题

#### v2.2.4

日期: 2021-01-20

- Svga 组件替换回 svgaplayerweb，接口没有变动，参考：[Svga](docs/components/basic/Svga.md)

#### v2.2.3

日期: 2021-01-17

- Svga 组件支持 slot，新增 props.params，参考：[Svga](docs/components/basic/Svga.md)

#### v2.2.2

日期: 2021-01-07

- 挂载参数 imagesPropertyName 重命名为 assetsProperty，详细参数：[安装](docs/guide/Install.md#挂载参数)
- 挂载参数 dialogPropertyName 重命名为 dialogProperty，详细参数：[安装](docs/guide/Install.md#挂载参数)
- 优化资源挂载，参考：[准备](docs/guide/Ready.md#图片资源)
- Svga 组件支持加载本地资源，参考：[Svga](docs/components/basic/Svga.md)

#### v2.2.1

日期: 2021-01-07

- 优化 Dialog 的禁止滚动穿透方式

#### v2.2.0

日期: 2021-01-05

- 新增 Dialog 组件以用来替代 Popup，后续更新将移除 Popup，Dialog 文档：[Dialog](docs/components/interact/Dialog.md)
- 新增 List 组件以用来替代 Scroll，后续更新将移除 Scroll，List 文档：[List](docs/components/basic/List.md)
- 新增 imagesPropertyName、dialogPropertyName 两个挂载参数：[安装](docs/guide/Install.md#挂载参数)
- 修改 Svga 中使用 svga.lite ，Scroll 中使用 @better-scroll/core 以减少包大小
- 修改 Avatar 的 frameParams 为 frameAttrs，保留 frameParams，后续更新将移除

#### v2.1.0

日期: 2021-01-04

- 新增 widthHeight 属性（quick：wh），可一并设置宽高，具体更新查阅：[Box 盒子属性](docs/components/mixins/Box.md)
- 新增 positionSet 属性（quick：ps），可一并设置定位，具体更新查阅：[Position 定位属性](docs/components/mixins/Position.md)
- 新增挂载参数 boxUnit，width、height、widthHeight、positionSet、left、right、top、bottom 属性可忽略单位
- 修改挂载参数 onTapAvatar 为 avatarOnTap，删除 antelope.utils 和 box.props.template 属性。
- 不再建议使用 imageSuffix 属性，后续更新将移除

#### v2.0.14 ～ 2.0.16

日期: 2020-12-17

- Scroll 组件新增在滚动至顶/底后，将触发外层滚动，且更新 better-scroll 版本为 2.0.6

#### v2.0.13

日期: 2020-12-17

- 在 Bullet、Slider 组件中使用 animationTimeout 去替代 setTimeout 以避免后台挂起导致的重叠问题

#### v2.0.12

日期: 2020-11-25

- 新增 buttonImgSpace 配置项，参考：[安装](docs/guide/Install.md#挂载参数)
- Svga 支持随时切换，异步加载，并修复加载错误时阻塞加载列表的 Bug

#### v2.0.11

日期: 2020-11-23

- 为 Svga 动态更新 url 的协议 ，以避免出现协议不一致导致加载失败的问题。

#### v2.0.10

日期: 2020-11-21

- 修复 Popup.ope 传递 onclose 参数时的调用错误

#### v2.0.9

日期: 2020-09-28

- 修复在切换页面时，因同名资源而导致页面 UI 为切换

#### v2.0.8

日期: 2020-09-25

- 挂载资源的方式进行优化
- 当 Button disabled 时禁用偏移量，以达到按钮多状态显示的效果
- Slider 支持 slot 自定义的内容

#### v2.0.7

日期: 2020-09-09

- 修复上一个版本 onclose 导致 Popup.close 导致 then 失效的 bug

#### v2.0.6

日期: 2020-09-08

- 修复 Position 组件传递 p="fixed" 不生效的问题
- Popup.open 支持传参 onclose ，以支持对不同场景关闭时的需求

#### v2.0.5

日期: 2020-08-27

- 新增 a-touchstart 和 a-touchend 的 \$emit
- 修改 Button 的间隔默认为 6 px
- 修复 Svga 在连续切换时因 dom 被销毁而导致的中断加载的错误
- Avatar 支持头像框的使用，参考：[Avatar](docs/components/basic/Avatar.md)

#### v2.0.4

日期: 2020-08-11

- 优化代码结构
- 修复 Bullet 在快速反复暂停和播放时导致的重叠问题
- 增加 Avatar 组件，参考：[Avatar](docs/components/basic/Avatar.md)

#### v2.0.3

日期: 2020-08-05

- 为 Roulette 做一个跳转的兼容

#### v2.0.2

日期: 2020-07-31

- 为 Box 混合添加 imageSuffix 参数（quick：iS）以实现背景图的动态切换
- 允许 position.left/top/right/bottom 传递 Number（针对传递 0 的情况）
- 更新 Bullet 的内部逻辑和渲染方式，允许自定义轮播元素，并提供对轮播暂停和继续的控制

#### v2.0.1

日期: 2020-07-20

- Roulette 传参保留之前的使用方式

#### v2.0.0

日期: 2020-07-16

- 改善速写属性和模板化，对于一些意外的错误进行了修复
- 基础工具进行了重写和优化
- 状态混合优化了逻辑，有一些逻辑修改，参考：[Status](docs/components/mixins/Status.md)
- 盒子混合删除了状态对于背景图加载的隐式后缀，参考：[Status](docs/components/mixins/Status.md)
- 定位混合更新了默认激活的条件，参考：[Position](docs/components/mixins/Position.md)
- 事件混合优化触发方式，增加 touch 的 class，参考：[Event](docs/components/mixins/Event.md)
- Button 现在可以根据素材自动设定宽高，自动确定偏移量，参考：[Button](docs/components/basic/Button.md)
- Fps9 现在可以根据素材自动设定宽高
- List 重写为 Scroll，使用 better-scroll 实现，封装一些方法，参考：[Scroll](docs/components/basic/Scroll.md)
- Box 重命名为 Popover
- Bullet 修复了一个触发时机的 bug
- NumSlider 重写为 Slider，支持任意内容的滚动，参考：[Slider](docs/components/interact/Slider.md)
- Popup 调整布局，优化结构
- Roulette 减少了不必要的传参，参考：[Roulette](docs/components/interact/Roulette.md)
- Timer 的 slot 传参完善，支持更细节的显示，参考：[Timer](docs/components/interact/Timer.md)

---

#### v1.5.7

日期: 2020-06-11

- 优化 Popup.open 的传参

#### v1.5.6

日期: 2020-05-19

- 优化：list 的 scroll-end 触发时机

#### v1.5.5

日期: 2020-05-19

- 优化：list 组件新增 \$emit('scroll-end') 来获取是否滚动到最底部

#### v1.5.4

日期: 2020-05-17

- 优化：svga 组件新增 props.autoplay 来控制是否自动播放

#### v1.5.3

日期: 2020-05-15

- 修复：多个 popup 开启可以点击到上一个 popup 的内容 bug
- 修复：更改 bg-i 时背景图不更新的 bug

#### v1.5.2

日期: 2020-05-14

- 修复：没有 \$route.meta.aImagesMap 的情况下网络图片不加载
- 修复：Popup 组件 props.options 不生效
- 修复：tpl 速写属性不生效
- 修复：props.status 不生效

#### v1.5.1

日期: 2020-05-12

- 优化：PC 端也将触发 @a-tap 事件，具体事件为：
- PC 端：mousedown/mousemove/mouseup
- 移动端：touchstart/touchmove/touchend

#### v1.5.0

日期: 2020-05-11

- 重写：Tab 更名为 [Tabs](docs/components/interact/Tabs.md)，改动较多，请查阅相关文档
- 优化：[Popup](docs/components/interact/Popup.md)、[Roulette](docs/components/interact/Roulette.md) 的传参优化，改动较多，请查阅相关文档
- 新增：混合的盒子属性和定位属性的相关 props 支持简写，请查阅相关文档
- 新增：只要存在定位属性中的任意 props 将自动开启定位模式

---

#### v1.4.2

日期: 2020-05-11

- 修复：上一个版本导致图片状态失效的 bug

#### v1.4.1

日期: 2020-05-11

- 修复：复用图片因任务队列问题无法加载的 bug

#### v1.4.0

日期: 2020-05-11

- 优化：Sprite 组件的内部结构，无需再传递 props.size
- 优化：Popup 组件，改动较多，请查阅：[Popup 浮层](docs/components/interact/Popup.md)
- 优化：Bullet 组件的传参，设定样式无需在传递 props.itemStyle
- 文档：同步现有组件

---

#### v1.3.3

日期: 2020-05-08

- 新增：支持创建组件模板，详细使用方法：[Box 盒子属性](docs/components/mixins/Box.md#template)

#### v1.3.2

日期: 2020-05-07

- 优化：SVGA 组件无需再传递 props.id
- 优化：源码结构，使用 @ 进行引用

#### v1.3.1

日期: 2020-05-06

- 优化文档的结构，补全更新日志
- 更新挂载的参数，整理 config

#### v1.3.0

日期: 2020-04-27

- 使用 stylus 来编译 css
- 将 basicMixins 优化为 box、event、position、status，组件按需混合
- 新增 config 配置文件，Vue.use 在挂载时传参，具体参数见：[安装](docs/guide/Install.md)
- 若不传递宽高或只传某一个，可通过 background-image 来自动设定宽高；需在挂载时开启，见：[安装](docs/guide/Install.md)

---

#### v1.2.1

日期: 2020-04-15

- 优化 svga 的加载，将依次加载并且不会加载重复的资源
- Popup 的 slot 可以通过 scope.active 以得到当前激活的值

#### v1.2.0

日期: 2020-04-03

- 更新编译任务，修改 antelope-ui.not-svga 为 antelope-ui.core

---

#### v1.1.14

日期: 2020-03-19

- Tab 的 tab-bar 可以通过 scope.active 以得到当前激活的值

#### v1.1.13

日期: 2020-03-19

- 修改 a-page 为 a-sections

#### v1.0.12

日期: 2020-03-19

- Popup 支持开启多个

#### v1.0.11

日期: 2020-03-16

- 新增 Box 组件，文档整理

#### v1.0.10

日期: 2020-03-10

- 优化 Popup 的代码，解决关闭后迅速开启导致浮层丢失的 bug

#### v1.0.9

日期: 2020-03-10

- 新增 Fps9 组件，文档整理

#### v1.0.8

日期: 2020-03-02

- 修复 Roulette 组件在长度溢出的而导致轮盘结果不准确的问题

#### v1.0.7

日期: 2020-03-01

- 修复 vue-loader 没有对 .vue 文件进行 es6 转 es5 的 bug
- Popup.open 的传参由 params 改为 options

#### v1.0.6

日期: 2020-02-24

- 新增 antelope-ui.not-svga.js 以供不需要 svga 的情况

#### v1.0.5

日期: 2020-02-20

- 更新文档
- basicMixins 增加对 this.\$route 的判断
- webpack.config.js 新增 output.library

#### v1.0.4

日期: 2020-02-20

- 更新文档
- 支持 Vue.use 在挂载时传参，目前为可传递 prefix：自定义组件挂载前缀

#### v1.0.3

日期: 2020-02-20

- 增加 getImagesMap 辅助方法

#### v1.0.2

日期: 2020-02-19

- 更新文档
- 将 mixins/basic、mixins/position 合并为 utils/basicMixins，并合并一些代码
- 优化 NumSlider、Tab、Bullet 组件的样式，新增 Page 组件
- 构建任务优化

#### v1.0.1

日期: 2020-02-18

- 拷贝本地代码：文档、组件，发布正式版本

#### v1.0.0

日期: 2020-02-16

- 初始化 npm ，发布空的包
