<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package sanev_WooCommerce
 */

?>
	<footer id="colophon" class="site-footer dark-bg container-py footer-pb-md container-inline-padding">
		<div class="d-flex flex-column-sm gap-4-sm mb-4-sm align-start justify-between">
			<a href="<?php echo esc_url(home_url('/')); ?>">
				<img class="custom-logo" src="<?php echo esc_url(get_image_url('/2024/03/blanke-white.svg'))?>" alt="logo">
			</a>
			<div class="d-flex footer-submenus-gap">
				<div class="d-flex flex-column element-gap-2 gap-3-md">
					<h3 class="s-font capitalize light fw-500 footer-titles-font-size">Privacidad</h3>
					<div class="d-flex capitalize flex-column element-gap">
						<a class="s-font muted fw-400 footer-font-size" href="#">Seguridad de datos</a>
						<a class="s-font muted fw-400 footer-font-size" href="#">cookies</a>
						<a class="s-font muted fw-400 footer-font-size" href="#">Términos y condiciones</a>
						<a class="s-font muted fw-400 footer-font-size" href="#">Política de privacidad</a>
					</div>
				</div>
				<div class="d-flex flex-column element-gap-2 gap-3-md">
					<h3 class="s-font capitalize light fw-500 footer-titles-font-size">Contáctanos</h3>
					<div class="d-flex flex-column element-gap">
						<a class="s-font muted fw-400 footer-font-size" href="#">blanke@gmail.com</a>
						<a class="s-font muted fw-400 footer-font-size" href="#">+57 800 339 2232 </a>
					</div>
				</div>
				<div class="d-flex flex-column element-gap-2 gap-3-md">
					<h3 class="s-font capitalize light fw-500 footer-titles-font-size">Redes Sociales</h3>
					<div class="d-flex capitalize flex-column element-gap">
						<a class="s-font muted fw-400 footer-font-size" href="#">facebook</a>
						<a class="s-font muted fw-400 footer-font-size" href="#">Twitter</a>
						<a class="s-font muted fw-400 footer-font-size" href="#">tiktok</a>
						<a class="s-font muted fw-400 footer-font-size" href="#">instagram</a>
					</div>
				</div>
			</div>
		</div>
		<div class="d-flex gap-4">
			<i class="bi bi-facebook light footer-icons"></i>
			<i class="bi bi-instagram light footer-icons"></i>
			<i class="bi bi-twitter-x light footer-icons"></i>
			<i class="bi bi-tiktok light footer-icons"></i>
		</div>
	</footer><!-- #colophon -->
</div><!-- #page -->
<?php wp_footer(); ?>
</body>
</html>
