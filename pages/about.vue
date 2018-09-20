<template>
<div style="padding-bottom: 50px">
    <section class="section">
        <div class="columns is-centered">
            <div class="column is-10 has-text-white">
                <div class="columns is-centered is-multiline is-mobile">
                    <div class="column is-12">
                        <h1 class="title is-size-7 is-uppercase has-space has-text-white">About</h1>
                    </div>
                    <div class="column is-5-mobile is-2-desktop">
                        <figure class="image is-5by5">
                            <img class="is-rounded" src="img/myAvatar.png" alt="">
                        </figure>
                    </div>
                    <div class="column is-7-mobile is-10-desktop has-text-white is-flex">
                        <div class="is-self-align--center">
                            <h1 class="title is-size-5 has-text-white">Nkeze Sylvester Uche</h1>
                            <p class="is-size-6">Fullstack Web Developer / Graphic Artist</p>
                        </div>
                    </div>
                </div>
                <!--Content-->
                <div class="columns is-centered is-multiline is-mobile">
                    <div class="column is-12">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat est at dolorem, error inventore consequuntur labore aut porro nemo! Odio enim nam nihil sed, molestiae architecto eveniet itaque doloremque blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quisquam error cupiditate, doloribus iure itaque blanditiis ex nihil commodi sapiente quaerat, saepe, ab nulla voluptates eum odio vero? Culpa, laboriosam?</p>
                    </div>
                </div>

                <!--Operation Stack-->
                <div class="columns is-multiline">
                    <div class="column is-5 sub-categories has-margin mv1 mh1 has-padding pv2 ph2">
                        <h2 class="subtitle is-size-7 has-space is-uppercase has-text-white">Development Tools</h2>
                        <span class="object-tag">PHP7</span> <span class="object-tag">Javascript</span><span class="object-tag">CSS3</span><span class="object-tag">MySQL</span>
                    </div>
                    <div class="column is-5 sub-categories has-margin mv1 mh1 has-padding pv2 ph2">
                        <h2 class="subtitle is-size-7 has-space is-uppercase has-text-white">Libraries and Frameworks</h2>
                        <span class="object-tag">Laravel</span><span class="object-tag">Bulma</span><span class="object-tag">Bootstrap</span><span class="object-tag">Jquery</span><span class="object-tag">Vuejs</span>
                    </div>
                    <div class="column is-5 sub-categories has-margin mv1 mh1 has-padding pv2 ph2">
                        <h2 class="subtitle is-size-7 has-space is-uppercase has-text-white">Grapic design tool</h2>
                        <span class="object-tag">Corel Draw</span>
                    </div>
                    <div class="column is-5 sub-categories has-margin mv1 mh1 has-padding pv2 ph2">
                        <h2 class="subtitle is-size-7 has-space is-uppercase has-text-white">Version Control and Cloud Storage Tools</h2>
                        <span class="object-tag">Git</span><span class="object-tag">Github</span><span class="object-tag">Gitlab</span><span class="object-tag">Heroku</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
</template>
<script>
export default {
    layout: 'custom',
    head:{
			title: 'About me'
		}
}
</script>
<style lang="sass">

</style>
