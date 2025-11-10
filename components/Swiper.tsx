{/* <Swiper
        effect={"coverflow"}
        loop={true}
        navigation={true}
        centeredSlides={true}
        slidesPerView={3}
        style={{ paddingBottom: "80px" }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {projectData.map((movie, i) => (
          <SwiperSlide key={i} className="hover:cursor-pointer">
            <div className="relative rounded-2xl overflow-hidden cursor-pointer shadow-xl card hover:scale-105 duration-300 transition">
              <img
                src={movie.src}
                alt={movie.title}
                className="w-full h-[400px] rounded-2xl object-cover block cursor-pointer "
              />

              <div className="absolute bg-amber-300 bottom-0 left-0 right-0 p-5 bg-linear-to-t from-black/80 to-transparent">
                <h2 className="text-white text-xl font-bold">{movie.title}</h2>
                <p className="text-white/70 text-sm mt-1">
                  {movie.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper> */}