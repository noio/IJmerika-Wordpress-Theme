        </div><!--end page-->
        <div id="footer">
            <div class='container'>
                <?php if(is_single() && comments_open()):?> 
                <div id='comments'>
                    <h2>Comments</h2><?php comments_template(); ?>
                </div>
                <?php get_sidebar('footer'); ?>
                <?php endif; ?>
                <hr/>
            </div>
        </div>
        <?php wp_footer(); ?>
    </body>
</html> <!-- The end -->