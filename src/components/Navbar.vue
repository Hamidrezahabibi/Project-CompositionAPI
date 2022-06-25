<template>
    <header>
        <div class="sticky-top p-2 shadow" style="--bs-bg-opacity: 0.95; background-color: #e3f2fd;">
            <nav class="navbar navbar-expand-lg navbar-light container">
                <div class="container-fluid">
                <a class="navbar-brand fs-4" href="#">Web Developer!</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarColor03">
                    <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/users">Users</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/posts">Posts</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/about">About</a>
                    </li>
                    </ul>
                    <div class="d-flex justify-content-lg-end" style="width: 300px;">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">    
                    <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                    </div>
                </div>
                </div>
            </nav>
        </div>
    </header>
    
</template>
<script>
    export default {
        name: 'Navbar',
    }
</script>
