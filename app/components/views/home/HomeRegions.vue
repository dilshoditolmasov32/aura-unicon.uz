<script setup lang="ts">
import { ref, watch } from 'vue';
import MapSection from '~/components/map/MapSection.vue';
import type { VideoItem } from '~/interface/HomePage';

const { t } = useI18n();

const activeTab = ref<'foto' | 'video'>('foto');
const hoveredRegion = ref<string>(''); 

const mediaList = ref([
  { id: 1, image: '/images/amir-temur-maydoni.webp' },
  { id: 2, image: '/images/bahor.webp' },
  { id: 3, image: '/images/chortoq.webp' },
  { id: 4, image: '/images/sport-arena.webp' },
  { id: 5, image: '/images/samarqand.webp' },
  { id: 6, image: '/images/winter-season.webp' },
]);



const videoList = ref<VideoItem[]>([
  {
    id: 1,
    videoId: 'yhTaFyiu19g',
    title: "O'zbekiston sayohat filmi",
    description: 'Toshkent, Buxoro va Samarqand bo\'ylab sayohat',
  },
  {
    id: 2,
    videoId: 'XbhG3mt4Rk0',
    title: "Ipak yo'li merosi",
    description: 'Samarqand, Buxoro, Xiva va Toshkent',
  },
  {
    id: 3,
    videoId: 'u-PTtBwovP0',
    title: "O'zbekiston shaharlari",
    description: 'Toshkent, Xiva, Buxoro, Samarqand',
  },
  {
    id: 4,
    videoId: '8nPZs4rzU5M',
    title: "O'zbekiston 7 daqiqada",
    description: 'Toshkent, Samarqand, Buxoro, Xiva va Qizilqum cho\'li',
  },
  {
    id: 5,
    videoId: 'oozE3pOiOZo',
    title: "O'zbekiston 5 daqiqada",
    description: "Buxoro, Xiva, Samarqand va tabiat manzaralari",
  },
  {
    id: 6,
    videoId: 'n1TOeCbYzjA',
    title: 'Toshkent, Xiva, Buxoro va Samarqand',
    description: "O'zbekiston bo'ylab turistik sayohat",
  },
]);

const videoLoading = ref(false);
const videoErrors = ref<Record<number, boolean>>({});

const getEmbedUrl = (videoId: string) => `https://www.youtube.com/embed/${videoId}`;

const handleVideoError = (id: number) => {
  videoErrors.value[id] = true;
};

watch(activeTab, (tab) => {
  if (tab === 'video') {
    videoLoading.value = true;
    videoErrors.value = {};
    window.setTimeout(() => {
      videoLoading.value = false;
    }, 400);
  }
});

const handleRegionHover = (regionName: string) => {
  hoveredRegion.value = regionName;
};
</script>

<template>
  <section id="regions" class="bg-[#F5F9FC] py-10 px-4 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-[1200px]">
      
      <!-- Sarlavha -->
      <div class="text-center mb-8">
        <h2 class="text-2xl sm:text-3xl font-bold text-gray-900">
          {{ t('regions.title') }}
        </h2>
      </div>

      <!-- Grid: Chap 35% / O'ng 65% -->
      <div class="grid grid-cols-1 md:grid-cols-[1fr_1.8fr] lg:grid-cols-[35%_63%] gap-6 items-stretch">
        
        <!-- CHAP SIDEBAR (Karta simoli blok) -->
        <div class="bg-[#E9F2FF] backdrop-blur border border-[#D9E7F6] rounded-[24px] p-6 flex flex-col justify-between shadow-sm">
          
          <div>
            <!-- Tab Tugmalari (Foto / Video) -->
            <div class="bg-[#00000014] p-1 rounded-full flex items-center justify-between mb-4">
              <button
                @click="activeTab = 'foto'"
                :class="[
                  'w-1/2 py-2 text-sm font-semibold rounded-full transition-all flex items-center justify-center gap-2',
                  activeTab === 'foto' ? 'bg-white text-[#004FAD] shadow-sm' : 'text-[#000000] hover:text-gray-700'
                ]"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                {{ t('common.photo') }}
              </button>
              
              <button
                @click="activeTab = 'video'"
                :class="[
                  'w-1/2 py-2 text-sm font-semibold rounded-full transition-all flex items-center justify-center gap-2',
                  activeTab === 'video' ? 'bg-white text-[#177DDD] shadow-sm' : 'text-gray-500 hover:text-gray-700'
                ]"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                {{ t('common.video') }}
              </button>
            </div>

            <!-- Rasmlar Grid (2 ustunli) -->
            <div v-if="activeTab === 'foto'" class="grid grid-cols-2 gap-2.5">
              <div
                v-for="item in mediaList"
                :key="item.id"
                class="relative h-24 sm:h-28 rounded-xl overflow-hidden group cursor-pointer"
              >
                <img
                  :src="item.image"
                  alt="Content"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            <!-- Videolar Grid (desktop: 2 ustun, planshet/mobil: 1 ustun) -->
            <Transition name="media-fade" mode="out-in">
              <div v-if="activeTab === 'video' && videoLoading" key="video-loading" class="grid grid-cols-1 lg:grid-cols-2 gap-2.5">
                <div
                  v-for="n in 6"
                  :key="n"
                  class="aspect-video rounded-xl bg-[#00000014] animate-pulse"
                ></div>
              </div>

              <div v-else-if="activeTab === 'video'" key="video-content" class="grid grid-cols-1 lg:grid-cols-2 gap-2.5">
                <div
                  v-for="video in videoList"
                  :key="video.id"
                  class="rounded-xl overflow-hidden bg-white border border-[#D9E7F6]"
                >
                  <div class="relative w-full aspect-video bg-[#00000014]">
                    <div
                      v-if="videoErrors[video.id]"
                      class="absolute inset-0 flex flex-col items-center justify-center gap-1 px-2 text-center text-gray-400"
                    >
                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                      <span class="text-[11px] font-medium">{{ t('common.video_unavailable') }}</span>
                    </div>
                    <iframe
                      v-else
                      class="absolute inset-0 w-full h-full"
                      :src="getEmbedUrl(video.videoId)"
                      :title="video.title"
                      loading="lazy"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                      frameborder="0"
                      @error="handleVideoError(video.id)"
                    ></iframe>
                  </div>
                  <div class="p-2 sm:p-2.5">
                    <h4 class="text-xs sm:text-sm font-semibold text-gray-900 line-clamp-1">{{ video.title }}</h4>
                    <p v-if="video.description" class="text-[11px] text-gray-500 mt-0.5 line-clamp-2">{{ video.description }}</p>
                  </div>
                </div>
              </div>
            </Transition>
          </div>

          <!-- Barchasini ko'rish tugmasi -->
          <NuxtLink
            to="/gallery"
            class="mt-4 w-full py-2.5 border border-[#177DDD] text-[#3D68F8] font-semibold text-sm rounded-full hover:bg-[#005FDF99] hover:text-white transition-all flex items-center justify-center gap-2"
          >
            {{ t('regions.view_more') }}
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </NuxtLink>

        </div>

        <!-- O'NG TOMON: Xarita (MapSection) -->
        <div class="relative bg-gradient-to-br from-[#E4F0FB] to-[#D5E7F9] rounded-2xl p-4 flex items-center justify-center min-h-[400px] overflow-hidden border border-[#D9E7F6]">
          
          <!-- Milliy naqsh foni (Opsional visual) -->
         <div class="absolute -top-10 -right-10 w-64 h-64 opacity-10 pointer-events-none">
            <img src="/images/pattern1.svg" alt="" class="w-full h-full" />
          </div>

          <!-- Xarita Komponenti -->
          <MapSection @hover-region="handleRegionHover" />

        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.media-fade-enter-active,
.media-fade-leave-active {
  transition: opacity 0.2s ease;
}
.media-fade-enter-from,
.media-fade-leave-to {
  opacity: 0;
}
</style>