<template>
    <div class="location">
        <h1 class="my-resort">My Resort: {{this.$store.state.resortInfo.name}}</h1>
        <button v-if="!edit" @click="openEdit" class="change">change</button>
        <div v-else class="editor">
            <v-select v-model="newResort " class="resort-input" color="white" label="Resort" :items="resortList" item-text="display" item-value="api">
            </v-select>
            <button @click="cancel" class="cancel"><v-icon>mdi-cancel</v-icon></button>
            <button @click="confirm" class="confirm"><v-icon>mdi-check</v-icon></button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Location',
    data() {
        return {
            edit: false,
            newResort: '',
            resortList: this.$store.state.resortList
        }
    },
    methods: {
        openEdit() {
            this.$data.edit = true;
        },
        cancel() {
            this.$data.edit = false;
        },
        confirm() {
            this.$cookie.set('resort', this.$data.newResort, {expires: '5Y'});
            this.$data.edit = false;
            this.$emit('update');
        }
    }
}
</script>

<style scoped lang="scss">
    .location {
        padding-top: 20px;
        text-align: right;
        .my-resort {
            text-transform: capitalize;
            font-size: 28px;
            font-weight: 900;
        }
        .change {
            text-decoration: underline;
        }
        .editor {
            height: 40px;
            display: flex;
            justify-content: space-between;
            width: 90%;
            max-width: 300px;
            margin-left: auto;


            i, input {
                color: white;
            }

            .cancel, .confirm {
                margin-left: 10px;
            }
        }
    }
</style>