$(function sky_run() {
  let big_cloud = $('.big_sky');
  let small_cloud = $('.small_sky');
  let coordinateX = 0;

  let big_cloud_prop_left = parseInt(big_cloud.css("left"));
  let small_cloud_prop_left = parseInt(small_cloud.css("left"));

  $(document).on('mousemove', function (e) {
    let mouse_way = Math.abs(coordinateX - e.pageX);
    let point_cloud = big_cloud_prop_left;

    point_cloud =  - mouse_way/50;
    big_cloud.css("left", point_cloud);
    small_cloud.css("left", point_cloud*2);
  })
})
