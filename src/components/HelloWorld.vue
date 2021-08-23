<template>
    <!-- Theo mình thấy thì không được viết v-app ở đây chỉ viết v-app ở App root thôi  -->
    <!-- <v-app>
        Xinh gái quá cơ tôi làm sao mà biết được cơ chứ 
    </v-app> -->


    <v-row>
        <v-col cols="2" class="tren"></v-col>
        <v-col cols="2" class="giua"></v-col>
        <v-col cols="8" class="cuoi">
            <h1>Đây là Hello World</h1>
            <v-icon icon="mdi-home" />
            <h2>Đây 2: </h2>


            <v-icon large color="green darken-2">
                mdi-domain
            </v-icon>

            đây nhá fontsome <i class="fas fa-shopping-cart"></i>
        </v-col>
    </v-row>
</template>
<style scoped>
    .tren{
        background-color: greenyellow;
    }
    .giua{
        background-color: antiquewhite;

    }
    .cuoi{
        background-color: brown;
    }
</style>