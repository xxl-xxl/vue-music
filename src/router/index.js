import Vue from 'vue'
import VueRouter from 'vue-router'
import discovery from '@/components/discovery.vue'
import playlists from '@/components/playlists.vue'
import playlist from '@/components/playlist.vue'
import songs from '@/components/songs.vue'
import mvs from '@/components/mvs.vue'
import mv from '@/components/mv.vue'
import result from '@/components/result.vue'

Vue.use(VueRouter)

const routes = [
  {
    // 发现音乐
    path: '/',
    redirect: '/discovery'
  },
  {
    // 发现音乐
    path: '/discovery',
    component: discovery
  },
  {
    // 推荐歌单
    path: '/playlists',
    component: playlists
  },
  {
    // 推荐歌单
    path: '/playlist',
    component: playlist
  },
  {
    // 最新音乐
    path: '/songs',
    component: songs
  },
  {
    // 最新音乐
    path: '/mvs',
    component: mvs
  },
  // mv详情
  {
    path: '/mv',
    component: mv
  },
  // 搜索结果页
  {
    path: '/result',
    component: result
  }
]

const router = new VueRouter({
  routes
})

export default router
