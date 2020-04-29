<template>
    <nav class="col-lg-2 col-md-3 d-none d-md-block bg-dark sidebar">
        <div class="sidebar-sticky">
            <ul class="nav flex-column">
                <li class="nav-item">
                    <router-link class="nav-link" active-class="active" to="/dashboard">Dashboard</router-link>

                </li>
                <li class="nav-item">
                    <router-link class="nav-link" active-class="active" to="/search">Search</router-link>

                </li>
                <li class="nav-item">
                    <router-link class="nav-link" active-class="active" to="/aid-request">My Request</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" active-class="active" to="/volunteer">Volunteer</router-link>
                </li>
            </ul>

            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                <span>User</span>
            </h6>
            <ul class="nav flex-column mb-2">
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <span data-feather="file-text"></span>
                        My Settings
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <span data-feather="file-text"></span>
                        Useful links
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "SideNav",
        computed:{
            currPath(){
                return this.$route.path
            }
        }
    }
</script>

<style scoped lang="scss">
    .sidebar {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        z-index: 100; /* Behind the navbar */
        padding: 0;
        box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);

    }

    .sidebar-sticky {
        position: -webkit-sticky;
        position: sticky;
        top: 48px; /* Height of navbar */
        height: calc(100vh - 55px);
        padding-top: .5rem;
        overflow-x: hidden;
        overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
    }

    .sidebar .nav-link {
        /*font-weight: 500;*/
        color: #eee;
    }

    .sidebar .nav-link .feather {
        margin-right: 4px;
        color: #999;
    }

    .sidebar .nav-link.active {
        color: #17a2b8;
    }

    .sidebar .nav-link:hover .feather,
    .sidebar .nav-link.active .feather {
        color: inherit;
    }

    .sidebar-heading {
        font-size: .75rem;
        text-transform: uppercase;
    }
</style>