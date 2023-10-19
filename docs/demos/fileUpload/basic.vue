<template>
    <h-file-upload text="Select File" @pick="pick"/>
</template>

<script setup lang="ts">

function pick(file) {
    console.log(file)
}

</script>
