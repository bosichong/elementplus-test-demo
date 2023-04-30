<script setup>

import { useDark, useToggle } from '@vueuse/core'
import { ref,onMounted } from 'vue'
import { Menu as IconMenu, Message, Setting ,Menu,Sunny,
  Moon} from '@element-plus/icons-vue'


const isDark = useDark()
const toggleDark = useToggle(isDark)
const isAside = ref(true)



onMounted(() => {
  const handleResize = () => {
    if (window.innerWidth > 768) {
      isAside.value = true
    } else {
      isAside.value = false
    }
  }
  handleResize()
  window.addEventListener('resize', handleResize)
})





const item = {
  date: '2016-05-02',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles',
}
const tableData = ref(Array.from({ length: 20 }).fill(item))
</script>

<template>
  <el-container>
    <!-- <el-aside :class="isAside ? 'aside-hide' : ''" :width="'200px'"> -->
    <Transition name="slide-fade">
      <el-aside v-show="isAside" :width="'200px'">
        <el-scrollbar>
          <el-menu :default-openeds="['1', '3']">
            <el-sub-menu index="1">
              <template #title>
                <el-icon>
                  <message />
                </el-icon>Navigator One
              </template>
              <el-menu-item-group>
                <template #title>Group 1</template>
                <el-menu-item index="1-1">Option 1</el-menu-item>
                <el-menu-item index="1-2">Option 2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group 2">
                <el-menu-item index="1-3">Option 3</el-menu-item>
              </el-menu-item-group>
              <el-sub-menu index="1-4">
                <template #title>Option4</template>
                <el-menu-item index="1-4-1">Option 4-1</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-sub-menu index="2">
              <template #title>
                <el-icon><icon-menu /></el-icon>Navigator Two
              </template>
              <el-menu-item-group>
                <template #title>Group 1</template>
                <el-menu-item index="2-1">Option 1</el-menu-item>
                <el-menu-item index="2-2">Option 2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group 2">
                <el-menu-item index="2-3">Option 3</el-menu-item>
              </el-menu-item-group>
              <el-sub-menu index="2-4">
                <template #title>Option 4</template>
                <el-menu-item index="2-4-1">Option 4-1</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-sub-menu index="3">
              <template #title>
                <el-icon>
                  <setting />
                </el-icon>Navigator Three
              </template>
              <el-menu-item-group>
                <template #title>Group 1</template>
                <el-menu-item index="3-1">Option 1</el-menu-item>
                <el-menu-item index="3-2">Option 2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group 2">
                <el-menu-item index="3-3">Option 3</el-menu-item>
              </el-menu-item-group>
              <el-sub-menu index="3-4">
                <template #title>Option 4</template>
                <el-menu-item index="3-4-1">Option 4-1</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
          </el-menu>
        </el-scrollbar>
      </el-aside>
    </Transition>
    <el-main>
      <el-container>
        <el-header>
          <el-button :icon="Menu"  @click="isAside = !isAside" />
          <el-switch v-model="isDark" size="large" class="mt-2" style="margin-left: 24px" inline-prompt
            :active-icon="Moon" :inactive-icon="Sunny" />
          
        </el-header>
        <el-main>
          <el-scrollbar>
            <el-table :data="tableData">
              <el-table-column prop="date" label="Date" width="140" />
              <el-table-column prop="name" label="Name" width="120" />
              <el-table-column prop="address" label="Address" />
            </el-table>
          </el-scrollbar>
        </el-main>
      </el-container>
    </el-main>
  </el-container>
</template>

<style>
.slide-fade-enter-active {
  transition: width 0.1s;
}

.slide-fade-leave-active {
  transition: width 0.1s;
}

.slide-fade-enter-from {
  width: 0px;
}

.slide-fade-enter-to,
.slide-fade-leave-from {
  width: 200px;
}

.slide-fade-leave-to {
  width: 0px;
}

</style>
