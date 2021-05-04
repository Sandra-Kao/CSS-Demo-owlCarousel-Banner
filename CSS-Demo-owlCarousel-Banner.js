function setOwlCarousel(
	loop,
	autoplay,
	margin,
	itemsForMobile,
	itemsForPad,
	itemForPC
) {
	return {
		loop: loop || true,
		margin: margin || 20,
		autoplay: autoplay || false,
		autoplayTimeout: 6000,
		autoplayHoverPause: false,
		nav: true,
		navText: [
			'<i class="fas fa-angle-left"></i>',
			'<i class="fas fa-angle-right"></i>'
		],
		navElement: "div",
		responsive: {
			0: { items: itemsForMobile || 1, slideBy: itemsForMobile || 1 },
			768: { items: itemsForPad || 1, slideBy: itemsForPad || 1 },
			992: { items: itemForPC || 5, slideBy: itemForPC || 5 }
		},
		onInitialized(event) {
			const index = 0;
			const totalPages =
				event.item.count % event.page.size === 0
					? event.item.count / event.page.size
					: Math.floor(event.item.count / event.page.size) + 1;
			const buildPagination = function (index, count) {
				return $(
					'<div class="owl-pages"><span class="owl-pages-current">' +
						(function () {
							return index + 1;
						})() +
						'</span>&nbsp;&sol;&nbsp;<span class="owl-pages-count">' +
						count +
						"</span></div>"
				);
			};
			$(event.target).find(".owl-nav").addClass("text-center");
			$(event.target)
				.find(".owl-nav .owl-prev")
				.after(buildPagination(index, totalPages));
		},
		onChanged(event) {
			$(event.target)
				.find(".owl-pages-current")
				.text(event.page.index + 1);
		},
		onResized(event) {
			$(event.target)
				.find(".owl-pages-current")
				.text(event.page.index + 1);
			$(event.target)
				.find(".owl-pages-count")
				.text(
					event.item.count % event.page.size === 0
						? event.item.count / event.page.size
						: Math.floor(event.item.count / event.page.size) + 1
				);
		}
	};
}

$(document).ready(
	$("#owl-banner").owlCarousel(setOwlCarousel(true, true, 20, 1, 1, 1))
);
