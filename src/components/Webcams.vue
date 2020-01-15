<template>
    <div class="cams">
        <v-carousel 
            height="100%"
            :show-arrows="false"
            :hide-delimiter-background="true">
            <v-carousel-item v-bind:key="index" v-for="(slide, index) in this.$store.state.resortInfo.webcams">
                <h2 class="cam-title">{{slide.name}}</h2>
                <a v-bind:href="slide.source" class="cam-link" target="_blank" rel="noopener noreferrer">
                    <img v-bind:src="slide.image" v-bind:alt="slide.name" class="cam-teaser">
                </a>
            </v-carousel-item>
        </v-carousel>
    </div>
</template>

<script>
export default {
    name: 'Webcams',
    data() {
        return {
            
        }
    },
    methods: {
       
    }
}
</script>

<style scoped lang="scss">
    .cams {
        flex-grow: 1;
        height: calc(100% - 300px);

        .v-carousel {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .cam-title {
                font-weight: 900;
                font-size: 20px;
                text-align: left;
                padding-bottom: 10px;
                border-bottom: 2px solid white;
                margin-bottom: 20px;
            }
            .cam-teaser {
                width: 100%;
            }
        }
    }
</style>