<template>
  <div>
    <h1>插槽测试</h1>
    <!-- 预留插槽位置 ， 可以在使用组件时 在组件标签中 添加其他标签内容 -->
    <slot></slot>
    <p>我是最底部</p>
    <!-- 预留底部插槽 -->
    <slot name="bottom"></slot>
  </div>
</template>
