<template>
    <div class="lifts">
        <h1 class="module-title">Lifts</h1>
        <v-progress-linear background-color="#000" color="#82FAA2" :value="this.$store.state.resortInfo.lifts.stats.percentage.open"></v-progress-linear>
        <ul class="lift-container">
            <li class="lift" v-bind:key="index" v-bind:class="lift" v-for="(lift, name, index) in this.$store.state.resortInfo.lifts.status">
                <h2 class="name">{{name}}</h2>
                <v-icon v-if="lift==='open'">mdi-check</v-icon>
                <v-icon v-else-if="lift==='closed'">mdi-close</v-icon>
                <v-icon v-else-if="lift==='scheduled'">mdi-clock-outline</v-icon>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Lifts'
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
            .open {
                color: #82FAA2;
            }
            .closed {
                color: black;
            }
            .mdi-close {
                color: black;
            }
            .mdi-check {
                color: #82FAA2;
            }
        }
    }
</style>