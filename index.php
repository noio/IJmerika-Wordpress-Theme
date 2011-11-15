<?php get_header(); ?>
<div class='container clearfix'>

<?php if (is_tag()): ?>
    <h3>Viewing posts tagged <em>&ldquo;<?php single_tag_title();?>&rdquo;</em></h3>
<?php endif; ?>

<div id="content">
    <?php if (have_posts()) : ?>
        <?php while (have_posts()) : the_post(); ?>
            
            <div <?php post_class('clearfix entry'. (has_post_thumbnail() ? ' has-thumbnail' : ''));?>>
              
                <h2><a href="<?php the_permalink() ?>" rel="bookmark" title="Permanent Link to <?php the_title_attribute(); ?>">
                    <?php the_title(); ?></a>
                </h2>
                
                <span class='date'>
                    <span class="month"><?php the_time('M');?></span>
                    <span class="year"><?php the_time('Y');?></span>
                </span>
                
                <?php if ((is_category() || is_archive() || is_front_page()) && has_post_thumbnail()):?>
                    <div class='thumbnail'>
                      <?php the_post_thumbnail('thumbnail'); ?>
                    </div>
                <?php endif; ?>
                
                <?php if (is_category() || is_archive() || is_front_page()):?>

                    <p style='clear:both;'><?php echo get_the_excerpt();?> </p>                      

                    <ul class="meta">
                        <!-- <li class='category'><?php the_category(',');?></li> -->
                        <li class='tags'><?php the_tags('',',','')?></li>
                        <li class='comments'><?php comments_number();?></li>
                        <li class='postlink'><a href="<?php the_permalink() ?>"  title="<?php the_title_attribute(); ?>">
                            Read post</a></li>
                    </ul>
                <?php else: ?>
                    <div class='post-content'><?php the_content();?></div>
                <?php endif; ?>
                                    
            </div>
        <?php endwhile; ?>
    
        <div class="pagenav">
            <div class="alignleft"><?php previous_posts_link('&laquo; Previous Entries') ?></div>
            <div class="alignright"><?php next_posts_link('Next Entries &raquo;','') ?></div>
        </div>
        
    <?php else : ?>
        <h2 class="center">Not Found</h2>
        <p class="center">Sorry, but you are looking for something that isn't here.</p>
        <?php /* include (TEMPLATEPATH . "/searchform.php"); */?>
    <?php endif; ?>
      
      
</div>
    
  <?php get_sidebar();?>


</div>

<?php get_footer(); ?>
