<template>
    <div class="feed">
        <h1 class="module-title">Recent Tweets</h1>
        <h2 class="username">@{{this.$store.state.resortInfo.twitter.user}}</h2>
        <div class="tweet-container">
            <div v-bind:key="index" v-for="(tweet, index) in this.$store.state.resortInfo.twitter.tweets" class="tweet">
                <p class="text">{{tweet.text.slice(0,99)+'...'}}</p>
                <img v-if="tweet.entities.media" v-bind:src="tweet.entities.media[0].media_url_https" v-bind:alt="tweet.text" class="media">
                <span class="date">{{new Date(tweet.created_at).toLocaleDateString('en-US')}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Feed'
}
</script>

<style scoped lang="scss">
    .feed {
        height: 100%;
        .username {
            font-size: 20px;
            font-weight: 300;
            text-align: left;
        }
        .tweet-container {
            height: calc(100% - 72px);
            overflow-y: scroll;
            .tweet {
                background-color: rgba(0,0,0,0.5);
                border-radius: 15px;
                margin-top: 10px;
                padding: 10px;
                .text {
                    line-height: 20px;
                    text-align: left;
                    font-weight: 900;
                }
                .media {
                    width: 100%;
                }
                .date {
                    margin-right: 0;
                    margin-left: 70%;
                }
            }
        }
    }
</style>