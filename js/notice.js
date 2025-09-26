$(document).ready(function () {

    // notice_faq 클릭시 wrap 내려오기 + color 변경
    $('.notice_faq_box_right').on('click', function () {
        const $this = $(this);
        const $wrap = $this.closest('.notice_faq_box_basic').next('.notice_faq_box_wrap');

        if ($this.hasClass('article')) {
            // 이미 열려 있던 wrap 닫기
            $this.removeClass('article');
            $wrap.slideUp();
        } else {
            // 다른 모든 wrap 닫기 + article 제거
            $('.notice_faq_box_right').removeClass('article');
            $('.notice_faq_box_wrap').slideUp();

            // 현재 클릭한 것만 열기
            $this.addClass('article');
            $wrap.slideDown();
        }
    });



    // nav 클릭 시 해당되는 notice_faq_contain 뜨기
    $('.notice_nav_contain li').on('click', function () {
        const clickedClass = $(this).attr('class'); 
        const type = clickedClass.replace('notice_nav_', '').replace(' add', '');

        $('.notice_faq_contain').hide();

        // 해당하는 것만 보여주기
        $(`.notice_faq_contain_${type}`).show();

        // nav 클릭시 color 변경
        $('.notice_nav_contain li').removeClass('add');
        $(this).addClass('add');

        // 탭 바뀔 때 열려 있던 FAQ들 초기화 
        $('.notice_faq_box_wrap').slideUp();
        $('.notice_faq_box_right').removeClass('article');
    });


    

// 팝업창 js
     $('.notice_faq_btn').on('click', function () {
        $('.notice_faq_popup').fadeIn(300);
    });

    // x버튼 or 제출 버튼 클릭 시 팝업 닫기 및 txt입력 초기화
    $('.Close, .writeBtn').on('click', function () {
        // 입력값 초기화
        $('.popup_title_input').val('');
        $('.popup_detail_input').val('');

        // 팝업 닫기
        $('.notice_faq_popup').fadeOut(300);
    });





});   //jquery end
