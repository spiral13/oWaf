<aside class="sidebar">
  <div class="sidebar__category">
    <h2>Catégories</h2>
    <ul>
      <li><a href="#">Education</a></li>
      <li><a href="#">Alimentation</a></li>
      <li><a href="#">Soins</a></li>
      <li><a href="#">Trucs et astuces</a></li>
    </ul>
  </div>
  <div class="sidebar__posts">
    <h2>Articles</h2>

      <?php $searchform = get_search_form();
      echo strip_tags($searchform, '<label>');?>

      <!-- <?php
        if( is_active_sidebar( '1' ) ):
        dynamic_sidebar( '1' );
        endif;
        ?> -->

    <!-- <input type="text" placeholder="Recherche"><button type="button" name="button"><i class="fa fa-search"></i></button> -->

  </div>
  <div class="sidebar__add-post">
    <a href=""><span>+ </span>Ajouter un article</a>
  </div>
</aside>