<ul class="sidebar">
<?php if ( !function_exists('dynamic_sidebar')
        || !dynamic_sidebar(2) ) : ?>
 <li>
  <h2>About</h2>
  <p>This is my blog.</p>
 </li>
<?php endif; ?>
</ul>