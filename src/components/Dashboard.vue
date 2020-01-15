<template>
    <!-- rendered if cookie needs user data -->
    <div class="onboarding" v-if="this.$store.state.onboard">
        <h1 class="welcome">Welcome to SendIT</h1>
        <h2 class="explanation">We just need a tiny bit of information</h2>
        <div class="name-container">
            <v-text-field v-model="name" class="name-input" label="Name" color="white"/>
        </div>
        <div class="resort-container">
            <v-select v-model="resort " class="resort-input" color="white" label="Resort" :items="resortList" item-text="display" item-value="api">
            </v-select>
        </div>
        <button @click="submit" class="submit-button">SEND IT</button>
    </div>
    <!-- rendered if cookie has user data -->
    <div v-else class="dashboard">
        <v-row class="header">
                <v-col cols="7" class="header-left">
                    <h1 class="greeting">Hello, {{name}}</h1>
                    <h2 class="time">It is {{time}} on {{date}}</h2>
                </v-col>
                <v-col cols="5">
                    <Location @update="changeResort"/>
                </v-col>
        </v-row>
        <v-row class="content" v-if="api">
            <v-col class="left-column">
                <Weather/>
                <Webcams/>
            </v-col>
            <v-col>
                <Lifts/>
            </v-col>
            <v-col>
                <Feed/>
            </v-col>
        </v-row>
        <v-row v-else class="skeleton"> <!-- CHANGE LATER TO HAVE SKELETON LOADERS -->
            <v-col>
                <div>Weather</div>
                <div>Webcams</div>
            </v-col>
            <v-col>
                <div>TwitterFeed</div>
            </v-col>
            <v-col>
                <div>Lift Status</div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import Lifts from "./Lifts.vue";
import Location from "./Location.vue";
import Weather from "./Weather.vue";
import Webcams from "./Webcams.vue";
import Feed from './Feed.vue';
import axios from 'axios';
import { VTextField, VSelect, VRow, VCol } from 'vuetify/lib';

export default {
    name: 'Dashboard',
    data() {
        return {
            name: this.$cookie.get('name') || '', // if the cookie doesn't exist, it should set it to "" instead of undefined
            resort: this.$cookie.get('resort') || '',
            time: new Date().toLocaleTimeString([], {hour: "numeric", minute: "2-digit"}), // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString
            date: new Date().toLocaleDateString([], {month: "long", day: "numeric", year:"numeric"}),
            api: false,
            resortList: this.$store.state.resortList,
            timeOfDay: 'Morning'
        }
    },
    mounted: function () {
        if (this.$data.name&&this.$data.resort) {
            this.$store.commit('hasCookie');
            this.getInfo();
        }
    },
    components: {
        Lifts,
        Location,
        Weather,
        Webcams,
        Feed,
        VTextField,
        VSelect,
        VRow,
        VCol
    },
    methods: {
        submit() {
            let {name, resort, noResort, noName} = this.$data;
            if (name&&resort) { // if both are truthy, it sets cookies that expire in 5 years, might be overkill but whatever
                this.$cookie.set('name', name, {expires: '5Y'});
                this.$cookie.set('resort', resort, {expires: '5Y'});
                this.$store.commit('submitOnboard', {name: name, resort: resort})
                this.getInfo();
            }
        },
        getInfo() {
            console.log('in get info');
            axios.get(`https://cors-anywhere.herokuapp.com/https://liftie.info/api/resort/${this.$data.resort}`).then(res => {
                console.log('got resort info')
                this.$store.commit('resortInfo', res.data);
                this.$data.api = true;
            })
        },
        changeResort() {
            this.$data.resort = this.$cookie.get('resort');
            this.getInfo();
        }
    }
}
</script>

<style lang="scss">
    .onboarding {
        background-color: rgba(70, 115, 136, .8);
        border-radius: 20px;
        padding: 50px;
        color: white;
        .welcome {
            font-size: 60px;
            font-weight: 900;
        }
        .explanation {
            font-size: 32px;
            font-weight: 200;
        }
        .name-container, .resort-container {
            display: flex;
            width: 50%;
            justify-content: space-between;
            margin-left: 25%;
            margin-top: 20px;
        }
        
        .submit-button {
            background-color: white;
            font-size: 32px;
            font-weight: 800;
            color: #49768b;
            padding: 5px 20px;
            border-radius: 15px;
        }
    }
    .theme--light.v-label {
            color: white !important;
    }
    .theme--light.v-select .v-select__selections,
    .theme--light.v-input:not(.v-input--is-disabled) input {
        color: white !important;
        font-size: 24px;
    }
    .v-input__slot:before {
        border: none !important;
    }
    
    .v-select__selections {
        line-height: 30px;
    }
    .v-select__selection--comma {
        overflow: visible !important;
    }

    .mdi-menu-down {
        color: white !important;
    }
    .weather, .cams, .lifts, .feed {
        background-color: rgba(70, 115, 136, .8);
        border-radius: 15px;
        padding: 20px;
        .module-title {
            font-size: 28px;
            font-weight: 900;
            text-align: left;
        }
    }
</style>

<style lang="scss" scoped>
    .header {
        width: 100%;
        color: white;
        display: flex;
        justify-content: space-between; 
        .header-left {
            text-align: left;
            .greeting {
                font-size: 60px;
                font-weight: 900;
            }
            .time {
                font-size: 28px;
                font-weight: 400;
            }
        }
    }
    .content {
        height: calc(100% - 156px);
        justify-content: space-between;
        color: white;
        padding-top: 30px;

        .col {
            height: 100%;
        }

        .left-column {
            display: flex;
            flex-direction: column;
        }
    }
</style>