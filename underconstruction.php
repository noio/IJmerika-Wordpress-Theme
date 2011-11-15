<?php
/*
Template Name: Under Construction Page
*/
?>

<?php get_header()  ?>

<?php while (have_posts()) : the_post(); ?>

	<div style="width:400px; padding:40px 0 0 0; margin:auto;">
		<div>
			<?php the_date('Y-m','<h3>','</h3>')?>
			<?php the_title_firstword("<h2>","</h2>")?>
		</div>
		<?php the_content(); ?>
	</div>
<?php endwhile; ?>

<?php get_footer() ?>