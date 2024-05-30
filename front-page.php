<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package sanev_WooCommerce
 */

get_header();
?>
	<main id="primary" class="site-main">
	
		<?php
		while ( have_posts() ) :
			the_post();

			get_template_part( 'template-parts/content', 'page' );

			// If comments are open or we have at least one comment, load up the comment template.
			if ( comments_open() || get_comments_number() ) :
				comments_template();
			endif;

		endwhile; // End of the loop.
		?>
		<section class="d-flex flex-column-md gap-5-md justify-center-md justify-around align-center container-inline-padding">
			<div class="d-flex flex-column align-start justify-center align-center-md element-gap">
				<h1 class="p-header-font-size text-center-md fw-600 text-wrap">Luxe Aromas <br>Boutique</h1>
				<div class="p-paragraph-width text-center-md pb-3 pb-2-md">
					<p class="p-paragraph-font-size px-4-md text-center-md fw-200">Explora nuevas fragancias. Encuentra tu esencia.</p>
				</div>
				<div class="d-flex element-gap">
					<a href="#section-contact" class="this-theme-button d-inline bg-white black">Contáctanos</a>
					<a href="<?php echo esc_url(get_permalink( wc_get_page_id( 'shop' ) )); ?>" class="this-theme-button d-inline bg-black white">Compra Ahora</a> 
				</div>
			</div>
			<img class="img-1" src="<?php echo esc_url(get_image_url('/2024/03/manikin-scaled-e1711654353324.webp')) ?>" alt="image">
		</section>
		<section class="d-flex gap-4-md flex-column-reverse-md align-center justify-around light-bg py-5 container-inline-padding">
			<img class="img-2" src="<?php echo esc_url(get_image_url('/2024/04/crystal_rose.webp')) ?>" alt="image">
			<div class="pr-0-md pr-5">
				<h1 class="s-header-font-size text-center">Entregas a toda <br><span class="gradient-text p-font">Colombia</span></h1>
			</div>
		</section>
		<section class="d-flex flex-column justify-center align-center container-py container-inline-padding">
			<div class="d-flex flex-column align-center gap-1 mb-4">
				<h1 class="p-header-font-size text-center text-nowrap-md fw-600">Ultimas Ofertas</h1>
				<p class="s-paragraph-width text-center-md p-paragraph-font-size text-center fw-200">Últimas Ofertas. Descubre descuentos exclusivos en una amplia gama de perfumes.</p>
			</div>
			<div class="sanev-row-products w-100">
				<h2 class="t-header-style align-self-start my-3">Ofertas para ti</h2>
				<?php echo do_shortcode('[products columns=4 limit=4 on_sale="true"]'); ?>
			</div>
		</section>
		<section class="d-flex gap-5 flex-column-md justify-around align-center container-pb container-inline-padding">
			<div class="d-flex flex-column gap-4 gap-3-lg align-center justify-center">
				<h1 class="s-header-font-size text-center">Finaliza tu <br>compra ahora</h1>
				<a href="<?php echo esc_url(wc_get_checkout_url()); ?>" class="this-theme-button bg-black white">Finalizar compra</a>
			</div>
			<div class="images-grid element-gap">
				<img src="<?php echo esc_url(get_image_url('/2024/03/perfume2.webp')) ?>" alt="img">
				<img src="<?php echo esc_url(get_image_url('/2024/03/model-pink-lipstick2.webp')) ?>" alt="img">
				<img src="<?php echo esc_url(get_image_url('/2024/03/manikin-perfumes.webp')) ?>" alt="img">
			</div>
		</section>
		<section class="container-pb container-inline-padding" id="section-contact">
			<h1 class="s-header-font-size pb-4">Contáctanos</h1>
			<div class="d-flex flex-column-md gap">
				<a class="d-flex gap-2 flex-column border py-3 pl-3 w-100 cursor-pointer" href="#">
					<i class="bi bi-envelope"></i>
					<h2 class="t-header-style-2">Nuestro email</h2>
					<p>blanke@gmail.com</p>
				</a>
				<a class="d-flex gap-2 flex-column border py-3 pl-3 w-100 cursor-pointer" href="#">
					<i class="bi bi-telephone"></i>
					<h2 class="t-header-style-2">Orderna por telefono</h2>
					<p>+57 3107768611</p>
				</a>
			</div>
		</section>
	</main><!-- #main -->
<?php

get_footer();
