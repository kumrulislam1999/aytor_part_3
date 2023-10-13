$(function () {
    $(".bannar_sliding_box").slick({
        accessibility: true,
        autoplay: true,
        autoplaySpeed: 1000,
        dots: true,
        arrows: true,
        appendArrows: $('.arrow_items'),
        prevArrow: "<i class='bx bxs-left-arrow-circle prev_arrow arrows' ></i>",
        nextArrow: "<i class='bx bxs-right-arrow-circle next_arrow arrows' ></i>",
        appendDots: $(".dot_items"),
    })

    $('.arriavl_sliding_box').slick({
        accessibility: true,
        autoplay: true,
        autoplaySpeed: 1000,
        dots: false,
        arrows: true,
        slidesToShow: 4,
        prevArrow: `<i class='bx bx-left-arrow-alt arrow_left' ></i>`,
        nextArrow: `<i class='bx bx-right-arrow-alt arrow_right' ></i>`,
    })


    $('.deals_offer_sliding_box').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 2,
        arrows: false,
        dots: true,
    })

    $('.latest_sliding_box').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 2,
        arrows: false,
        dots: true,
    })
})