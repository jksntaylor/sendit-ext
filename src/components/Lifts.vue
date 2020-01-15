<template>
    <div class="lifts">
        <h1 class="module-title">Lifts</h1>
        <v-progress-linear background-color="#b42626" color="#82FAA2" :value="this.$store.state.resortInfo.lifts.stats.percentage.open"></v-progress-linear>
        <ul class="lift-container">
            <li class="lift" v-bind:key="index" v-bind:class="lift" v-for="(lift, name, index) in this.$store.state.resortInfo.lifts.status">
                <h2 class="name">{{name}}</h2>
                <v-icon title="Open" v-if="lift==='open'">mdi-check</v-icon>
                <v-icon title="Closed" v-else-if="lift==='closed'">mdi-close</v-icon>
                <v-icon title="Scheduled" v-else-if="lift==='scheduled'">mdi-clock-outline</v-icon>
                <v-icon title="On Hold" v-else-if="lift==='hold'">mdi-pause-circle</v-icon>
            </li>
        </ul>
    </div>
</template>

<script>
import { VProgressLinear, VIcon } from 'vuetify/lib'
export default {
    name: 'Lifts',
    components: {
        VProgressLinear,
        VIcon
    }
}
</script>

<style scoped lang="scss">
    .lifts {
        height: 100%;
        .lift-container {
            max-height: calc(100% - 46px);
            overflow-y: scroll;
            list-style: none;
            padding: 0;
            margin-top: 20px;
            .lift {
                display: flex;
                justify-content: space-between;
                .name {
                    font-weight: 500;
                    width: 90%;
                    text-align: left;
                }
            }
            .open, .mdi-check {
                color: #82FAA2;
            }
            .closed, .mdi-close {
                color: #b42626;
            }
            .scheduled, .mdi-clock-outline {
                color: lightcyan;
            }
            .hold, .mdi-pause-circle {
                color: lightgray;
            }
        }
    }
</style>