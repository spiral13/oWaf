<div class="postfull">
  <img src="<?php the_post_thumbnail_url(); ?>" alt="">
  <h3><?php the_title() ?></h3>
    <p><?php the_content(); ?></p>
    <p>Ecrit par <?php the_author(); ?>, le <?php the_date('j F Y'); ?>.</p>
    <div><?php the_category(); ?></div>
    <a style="border: none; display: flex;
    justify-content: flex-end;" href="<?php echo home_url(); ?>">Retourner à l'accueil</a>
</div>
