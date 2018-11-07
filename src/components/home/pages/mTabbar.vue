<template>
    <div class="tabs">
      <ul>
          <li>
              <router-link to="/todo">
                未完成
                <span class="badge">{{todoListLength}}</span>
              </router-link>
          </li>
          <li>
              <router-link to="/done">
                完成
                <span class="badge">{{doneListLength}}</span>
              </router-link>
          </li>
      </ul>
    </div>
</template>

<script>
export default {
    name:'tabs',
    props:['todoListLength','doneListLength']
}
</script>

<style scoped>

.tabs{
    padding: 6px 12px;
}
.tabs ul{
    display: flex;
    margin: 0;
    padding: 0;
}
.tabs ul li{
    list-style: none;
    flex: 1;
    text-align: center;
    padding: 6px;
    border-bottom: 1px solid #ddd;
}
</style>


