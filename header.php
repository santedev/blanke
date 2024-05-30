<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package sanev_WooCommerce
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site container-max-width margin-inline-auto">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'sanev_woocommerce' ); ?></a>
	<header id="masthead" class="site-header container-inline-padding header-bg-color">
		<div class="logo-padding-y d-flex justify-between align-center">
				<?php the_custom_logo(); ?>
			<div class="d-flex">
				<nav id="site-navigation" class="main-navigation d-flex align-center">
					<?php
					wp_nav_menu(
						array(
							'theme_location' => 'menu-1',
							'menu_id'        => 'primary-menu',
						)
					);
					?>
				</nav><!-- #site-navigation -->
			</div>
			<div class="d-flex align-center gap gap-0-md">
				<?php echo do_shortcode('[yaycurrency-switcher]'); ?>
				<a id="sanev-cart" href="<?php echo esc_url(wc_get_cart_url()); ?>" >
				<i class="bi bi-handbag-fill dark desktop-icon">
					<?php
					if (WC()->cart->get_cart_contents_count() > 0) {
						echo '<span id="cart-count" value="' . WC()->cart->get_cart_contents_count() . '">' . WC()->cart->get_cart_contents_count() . '</span>';
					}
					?>
				</i>
				</a>
				<form class="sanev-search-products pl-0 pl-3-md" name="myform" method="GET" action="<?php echo esc_url(home_url('/'));?>">
					<?php if (class_exists('WooCommerce')): ?>
					<input type="hidden" value="product" name="post_type">
					<?php endif;?>
					<input type="text" name="s" class="search-box" maxlength="128" value="<?php echo get_search_query();?>" placeholder="<?php esc_attr_e('Buscar productos', 'woocommerce');?>">
					<button type="submit" title="<?php esc_attr_e('Search', 'woocommerce');?>" class="search-btn-bg"><i class="bi bi-search dark desktop-icon"></i></button>
				</form>
			</div>
		</div>
		
	</header><!-- #masthead -->
	