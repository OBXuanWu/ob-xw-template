<template>
  <ObPlayer class="depth" ref="depth" style="width: 400px;height: 400px"/>
  <ObPlayer class="ir" ref="ir" style="width: 400px;height: 400px"/>
</template>

<script lang="ts">
import { inject, onMounted, ref } from 'vue';
import { FrameFormat, RESERVE_EVENT } from 'ob-xw-common'
export default{

  components:{
    // ObPlayer
  },
  setup(){

    const depth = ref(null)
    const ir = ref(null)

    onMounted( () => {

      const client: any = inject('client')
      
      client.setDataCallback(RESERVE_EVENT.DEPTH, (buffer: any, length: any, width: any, height: any) => {
        if(depth.value != undefined){
          (depth.value as any).render(width, height, buffer, FrameFormat.U8)
        }
      })


      client.setDataCallback(RESERVE_EVENT.IR, (buffer: any, length: any, width: any, height: any) => {
        if(ir.value != undefined){
          (ir.value as any).render(width, height, buffer, FrameFormat.U8)
        }
      })

    })

    return { depth, ir }
    
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
