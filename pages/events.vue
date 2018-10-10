<template>
<div style="padding-bottom: 50px">
    <section class="section">
        <div class="columns is-centered">
            <div class="column is-10 has-text-white">
                <div class="columns is-centered is-multiline is-mobile">
                    <div class="column is-12">
                        <h1 class="title is-size-7 is-uppercase has-space has-text-white">Events</h1>
                    </div>
                </div>
                <div class="columns is-multiline is-centered is-variable is-0">
                    <!--Event Column-->
                    <div class="column is-4 has-text-white" v-for="({name,description,by,venue,date},index) in events" :key="index">
                        <div class="sub-categories has-height is-flex has-wrap has-margin mv1 mh1 has-padding pv2 ph2">
                            <div class="is-self-align--top is-12">
                                <h2 class="title is-size-5 has-text-white is-12">{{name}}</h2>
                                <p class="has-margin mv1 is-size-7">By {{by}}</p>
                                <p class="has-margin mv1">{{description}}</p>
                            </div>
                            <div class="is-self-align--bottom is-12">
                                <p class="has-margin mv1 mh1"><i class="fa fas fa-calendar-alt"></i> {{date}}</p>
                                <p class="has-margin mv1 mh1"><i class="fa fas fa-map-marker-alt"></i> {{venue}}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
</div>
</template>
<script>
import events from "../assets/JSON/events.json";
export default {
    layout: 'custom',
    data(){
        return{
            events
        }
    }
}
</script>
<style lang="scss">

</style>