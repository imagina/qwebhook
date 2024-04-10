<template>
  <div id="customCardHooks">
    <!--Card content-->
    <q-card class="box default-card-grid" v-if="row">
      <!--Title-->
      <q-card-section class="row items-center justify-between">
        <!--Label-->
        <div class="box-title">{{ row.title }}</div>
        <!--Actions-->
        <btn-menu :actions="fieldActions" :action-data="row"/>
      </q-card-section>
      <!--Separator-->
      <q-separator/>
      <!--Content Info-->
      <q-card-section>
        <!--Description-->
        <label class="text-grey-7 q-mr-xs">{{ $tr('isite.cms.form.description') }}:</label>
        <div v-html="row.description"/>

        <!--Call Every Minutes-->
        <div class="q-mt-sm" v-if="!!row.callEveryMinutes">
          <label class="text-grey-7 q-mr-xs">{{ $tr('iwebhooks.cms.form.callEveryMinutes') }}:</label>
          {{ row.callEveryMinutes }}
        </div>

        <!--URL-->
        <div class="q-my-sm" style="word-wrap: break-word">
          <label class="text-grey-7 q-mr-xs">{{ $tr('iwebhooks.cms.form.endpoint') }}:</label>
          <p class="ellipsis">{{ row.endpoint }}</p>
          <q-tooltip>
            {{ row.endpoint }}
          </q-tooltip>
        </div>
        <!--Http Method-->
        <div>
          <label class="text-grey-7 q-mr-xs">{{ $tr('iwebhooks.cms.form.httpMethod') }}:</label> {{ row.httpMethod }}
        </div>
      </q-card-section>
      <!--Call to Action-->
      <q-card-actions align="right">
        <q-btn color="primary" size="md" rounded unelevated padding="xs md" @click="() => runAction(row)"
               :label="row.actionLabel" :loading="row.isLoading !== 0 || loading"/>
      </q-card-actions>
    </q-card>
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
import controller from '@imagina/qwebhook/_components/hookCard/controller'

export default defineComponent({
  props: {
    row: {default: false},
    permitAction: {default: false},
    fieldActions: {default: false}
  },
  components: {},
  setup(props, {emit}) {
    return controller(props, emit)
  }
})
</script>
<style lang="stylus">
#customCardHooks {
  .default-card-grid {
    padding-top: 5px;

    .default-card-grid_item-image {
      width: 100%;
      height: 140px;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      border-radius: $custom-radius-items;
      margin: 10px 0 10px 0;
    }
  }
}

</style>
