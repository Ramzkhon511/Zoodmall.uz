import React from 'react'
import '../css/nav/nav.css'
import { Outlet, Link } from 'react-router-dom'
export default function 
() {
  return (
    <div className='navdiv1 d-flex flex-column align-items-center'>
         <div className="navdiv11 d-flex justify-content-evenly">
             <div className="navdiv111 d-flex align-items-center">
                <Link  to="/products"><i class="fa-regular fa-eye"></i>Jozibador takliflar</Link> 
                <Link className='ms-2' to="mashhur"><i class="fa-regular fa-star"></i> Mashhur toifalar</Link>
                <Link className='ms-2' to="mashhur"><i class="fa-solid fa-bag-shopping"></i>  Zood'DA SOTISH</Link>
             </div>
             <div className="navdiv112 d-flex justify-content-end">
             <button type="button" class="btn " data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Top popover">
             UZ <i class="fa-solid fa-chevron-down"></i>
             </button>
             
            <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <i class="fa-solid fa-user me-2"></i>
            Kirish
            </button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
              </div>  
         </div>
         <div className="navdiv12">

         </div>
         <div className="navdiv13 bg-warning">
          
         </div>
    </div>
  )
}
