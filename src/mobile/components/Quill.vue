<template>
  <div>
    <!-- <NavList /> -->
    <!-- Two-way Data-Binding -->
    <!-- <quill-editor ref="myQuillEditor" v-model="content" :options="editorOption" @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
      @ready="onEditorReady($event)" /> -->
  </div>
</template>

<script>
  // import NavList from "./NavList"
  // import 'quill/dist/quill.core.css'
  // import 'quill/dist/quill.snow.css'
  // import 'quill/dist/quill.bubble.css'

  // import {
  //   quillEditor
  // } from 'vue-quill-editor'


  // export default {
  //   name: "quill",
  //   components: {
  //     quillEditor,
  //     NavList
  //   },
  //   data() {
  //     return {
  //       content: '<h2>I am Example</h2>',
  //       editorOption: {
  //         // Some Quill options...
  //       }
  //     }
  //   },
  //   methods: {
  //     onEditorBlur(quill) {
  //       console.log('editor blur!', quill)
  //     },
  //     onEditorFocus(quill) {
  //       console.log('editor focus!', quill)
  //     },
  //     onEditorReady(quill) {
  //       console.log('editor ready!', quill)
  //     },
  //     onEditorChange({
  //       quill,
  //       html,
  //       text
  //     }) {
  //       console.log('editor change!', quill, html, text)
  //       this.content = html
  //     }
  //   },
  //   computed: {
  //     editor() {
  //       return this.$refs.myQuillEditor.quill
  //     }
  //   },
  //   mounted() {
  //     console.log('this is current quill instance object', this.editor)
  //   }
  // }
</script>

<style>
</style>
