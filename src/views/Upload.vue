<template>
    <div class="row my-5">
    

 <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
  Upload Photos
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Upload Images</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="card mb-5">
        <img src="../assets/upload.png" class="card-img-top image" alt="" width="200px" height="300px">
        <hr>
  <div class="card-body text-center">
    <div class="form-group">
     <input type="file">
     </div>
    <div class="form-group text-center">
                        <button class="btn form-control btn-success">Upload</button>
                    </div>
  </div>
</div>
 </div>
      </div>
    </div>
  </div>
</div>
    
</template>

<style scoped>
    .image{
        padding: 30px;
    }
</style>