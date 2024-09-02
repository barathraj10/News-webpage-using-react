
import './App.css';

function Nav(){
  return(
    <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="col-4 navbar-brand" href="#">News Daily</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="col-4 collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="col-4 login">
        <button><i class="fa fa-bell"></i></button>
        <button> Login <i class="fa fa-user" aria-hidden="true"></i></button>
    </div>
  </div>
</nav>
<div class="cateogory">
  <div>Live</div>
  <div>Trending</div>
  <div>Economy</div>
  <div>Sports</div>
  <div>Politics</div>
  <div>Entertainment</div>
  <div>Education</div>
  <div>Exams</div>
  <div>Technology</div>
  <div></div>
</div>

</div>
  )
  
}

export default Nav;
