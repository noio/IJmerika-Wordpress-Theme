<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" <?php language_attributes(); ?>>

<head profile="http://gmpg.org/xfn/11">

  <title><?php bloginfo('name'); ?> 
    <?php wp_title(); ?></title>

  <meta name="author" content="Thomas van den Berg"/>
  <meta name="description" content="<?php bloginfo('description') ?>" />
  <meta name="keywords" content="graphic design portfolio web development flash programming n-dr01d andr01d" />
  <meta http-equiv="Content-Type" content="<?php bloginfo('html_type'); ?>; charset=<?php bloginfo('charset'); ?>" />
  <meta name="generator" content="WordPress <?php bloginfo('version'); ?>" /> <!-- leave this for stats -->
  <meta name="verify-v1" content="55sFCNkxLoZ43+bkSomM9ntR+bmUrp9BhC4YjX4rG0k=" /><!-- google verification -->

  <?php $t_dir = get_bloginfo('template_directory');?>  
  
  <link rel="SHORTCUT ICON" href="<?php echo $t_dir;?>/favicon.ico"/>
  <link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>" type="text/css" media="screen" />
  <link rel="alternate" type="application/rss+xml" title="<?php bloginfo('name'); ?> RSS Feed" href="<?php bloginfo('rss2_url'); ?>" />
  <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />
    
  <script src="<?php echo $t_dir;?>/js/mootools-core-1.4.1.js" type="text/javascript" charset="utf-8"></script>
  <script src="<?php echo $t_dir;?>/js/mootools-more-1.4.0.1.js" type="text/javascript" charset="utf-8"></script>
  <script src="<?php echo $t_dir;?>/js/LogoIJmerika.js" type="text/javascript" charset="utf-8"></script>
  
    
  <?php wp_head(); ?>
  
  <script type="text/javascript" charset="utf-8">
    var templateDir = "<?php echo $t_dir;?>";
    window.addEvent('domready', function(){
      document.id('logo').grab(new LogoIJmerika().preset02());
    });
  </script>
  
</head>
<body <?php body_class(); ?>>
  <div id="page">
    <div id="header">
      <h1 id="logo"><a href="<?php bloginfo('home'); ?>" name="top" alt="blog home">IJmerika</a></h1>
    </div>
