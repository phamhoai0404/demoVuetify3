<template>
    <v-app>
        <!-- Mình nghĩ là nó phân chia theo kiểu row, col trong bootstrap hay sao ấy -->
        <v-row>
            <v-col cols="2" class="py-2"></v-col>
            <v-col cols="10" class="py-2">
                <HelloWorld />
            </v-col>

        </v-row>
        <v-row>
            <v-col cols="2">
                <v-bottom-navigation :value="valuesss" color="primary">
                    <v-btn>
                        <span>Recents</span>
                        <v-icon>mdi-history</v-icon>
                    </v-btn>

                    <v-btn>
                        <span>Favorites</span>

                        <v-icon>mdi-heart</v-icon>
                    </v-btn>

                    <v-btn>
                        <span>Nearby</span>

                        <v-icon>mdi-map-marker</v-icon>
                    </v-btn>
                </v-bottom-navigation>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="5" class="danhgia">
                <div class="text-center rating">
                    <v-rating v-model="rating" x-small bg-color="orange-lighten-1" color="yellow" ></v-rating>
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-btn elevation="6" large x-large x-small class="buttonNha" @click="chonNha()">Chọn nha</v-btn>
        </v-row>

    </v-app>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'

    export default {
        name: 'App',

        components: {
            HelloWorld,
        },

        data: () => ({ valuesss: 1, rating: 0 }),
        methods: {
            chonNha() {
                console.log("Vào đây - this.rating: ", this.rating);
            }
        },
    }
</script>
<style scoped>
    .buttonNha {
        background-color: red !important;
        font-family: 'Courier New', Courier, monospace;
    }
    .danhgia{
        background-color: rgb(240, 240, 240);
    }
    .rating{
        background-color: violet !important;
        width: 100%;
        padding: 0;
        margin: 0;
        font-size: 5px !important;
    }
</style>