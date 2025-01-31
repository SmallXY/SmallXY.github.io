<template>
  <div id="app">
    <Header />
    <main>
      <About />
      <Projects />
      <Team />
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import About from './components/About.vue';
import Projects from './components/Projects.vue';
import Team from './components/Team.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    About,
    Projects,
    Team,
    Contact,
    Footer
  }
};
</script>

<style>
/* 引入全局样式 */
@import './styles.css';
</style> 