<template>
    <div class="">
        {{url}}
    </div>
</template>

<script>
    export default {
        data() {
            return {
                url: window.location
            }
        },
    }
</script>
