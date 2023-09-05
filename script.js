
// ---------------------------------------------------------------------------------------
// Open Sidebar
var sidebar_arr = [
  'market',
  'bag',
  'chapter',
  'ranking',
  'metamask',
  'setting',
]


// function openNav() {
//   document.getElementById("aside_setting").style.width = "90%";
// }

// function closeNav() {
//   document.getElementById("aside_setting").style.width = "0";
// }

// ---------------------------------------------------------------------------------------
// Sidebar button

// var children_sidebar = document.querySelectorAll('aside');

// var child_sidebar = Array.from(children_sidebar).map(child => {
//   var btn_close_sidebar = document.querySelectorAll('button')

//   Array.from(btn_close_sidebar).map(close => {
//     close.addEventListener('click', () => {
//       child.style.width = "0";
//     })
//   })
// })

// var buttons_sidebar = document.querySelectorAll('#func_sidebar li');

// var btn_Aside = Array.from(buttons_sidebar).map((button) => {
//   button.addEventListener("click", () => {
//     Array.from(buttons_sidebar).map((btn) => {
//       btn.classList.remove('click_btn_sidebar')
//     })

//     Array.from(children_sidebar).map(child => {
//       child.style.width = "90%"
//     })

//     button.classList.toggle('click_btn_sidebar')
//     return button;
//   });
// });

// document.addEventListener("click", (event) => {
//   // Kiểm tra nếu sự kiện click xảy ra bên ngoài vùng button
//   if (!event.target.closest("#func_sidebar li") && !event.target.closest('aside')) {
//     buttons_sidebar.forEach((btn) => {
//       btn.classList.remove('click_btn_sidebar')
//     })
//     children_sidebar.forEach((side) => {
//       side.style.width = "0";
//     });
//   }
// })

function aside_function() {
  const open_sound = document.getElementById('open_sound');
  const close_sound = document.getElementById('close_sound');
  const children_sidebar = document.querySelectorAll('aside');

  const game_sound = document.querySelectorAll('.game_sound');
  // Lặp qua các aside và thêm sự kiện click cho từng nút button trong từng aside
  Array.from(children_sidebar).map((child) => {
    const btn_close_sidebar = child.querySelectorAll('button');

    Array.from(btn_close_sidebar).map((close) => {
      close.addEventListener('click', () => {
        Array.from(buttons_sidebar).map((btn) => {
          btn.classList.remove('click_btn_sidebar');
        });

        // add close sound
        close_sound.play();

        // show aside
        child.classList.remove('show_aside')
      });
    });
  });

  const buttons_sidebar = document.querySelectorAll('#func_sidebar li');

  // Lặp qua các nút li và thêm sự kiện click
  Array.from(buttons_sidebar).map((button) => {
    button.addEventListener("click", () => {
      // Loại bỏ lớp 'click_btn_sidebar' từ tất cả các nút li
      Array.from(buttons_sidebar).map((btn) => {
        btn.classList.remove('click_btn_sidebar');
      });

      Array.from(children_sidebar).map((side) => {
        side.classList.remove('show_aside')
      });

      // add open sound
      open_sound.play();

      // Thay đổi kích thước width của aside tương ứng
      const childIndex = Array.from(buttons_sidebar).indexOf(button);
      children_sidebar[childIndex].classList.add('show_aside')

      // Thêm hoặc loại bỏ lớp 'click_btn_sidebar' cho nút li hiện tại
      button.classList.add('click_btn_sidebar');
    });
  });

  document.addEventListener("click", (event) => {
    // Kiểm tra nếu sự kiện click xảy ra bên ngoài vùng button và aside
    if (event.target.closest('aside .esc_aside')) {
      buttons_sidebar.forEach((btn) => {
        btn.classList.remove('click_btn_sidebar');
      });
      children_sidebar.forEach((side) => {
        side.classList.remove('show_aside')
      });
    }
  });
}
aside_function();
// ---------

