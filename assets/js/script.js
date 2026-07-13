$(function () {
  const shouldReduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const timelineItems = [
    {
      title: "Cotización y diseño",
      text: "Configuración del módulo a medida, incluyendo superficie, distribución, ventanas, terminaciones y destino del proyecto."
    },
    {
      title: "Viabilidad técnica",
      text: "Evaluación de las condiciones del terreno del cliente para revisar accesos, montaje, fundaciones y servicios."
    },
    {
      title: "Contrato y orden de compra",
      text: "Formalización del contrato y la orden de compra con el alcance técnico y comercial definido."
    },
    {
      title: "Abono inicial del 50%",
      text: "Pago del 50% para iniciar la fabricación en taller. El plazo estimado de producción es de 60 a 90 días."
    },
    {
      title: "Abono del 30% por avance",
      text: "Pago del 30% al registrar un 80% de avance físico de la obra."
    },
    {
      title: "Inspección en fábrica",
      text: "El cliente revisa el montaje directamente en la fábrica de Osorno o Temuco antes del cierre."
    },
    {
      title: "Abono final del 20%",
      text: "Pago del 20% restante al completarse la unidad en taller y quedar lista para traslado."
    },
    {
      title: "Traslado e instalación",
      text: "El traslado es por cuenta del cliente. El costo de instalación y montaje en destino varía según el modelo."
    }
  ];

  const $heroSlides = $(".hero-slide");
  const heroSlideSources = [
    "assets/img/bg-hero1.jpeg",
    "assets/img/bg-hero2.jpeg"
  ];
  const $portfolioTrack = $(".portfolio-track");
  const $portfolioCards = $(".portfolio-card");
  let activeHeroIndex = 0;
  let activeTimelineIndex = 0;
  let portfolioIndex = 0;
  let heroTimer = null;
  let timelineTimer = null;
  let resizeTimer = null;

  $heroSlides.each(function (index) {
    if (heroSlideSources[index]) {
      $(this).attr("src", heroSlideSources[index]);
    }
  });

  function setHeroSlide(index) {
    activeHeroIndex = index;
    $heroSlides
      .eq(index)
      .addClass("active")
      .attr("aria-hidden", "false")
      .siblings(".hero-slide")
      .removeClass("active")
      .attr("aria-hidden", "true");
  }

  function startHeroSlideshow() {
    window.clearInterval(heroTimer);
    if ($heroSlides.length < 2) {
      return;
    }

    heroTimer = window.setInterval(() => {
      setHeroSlide((activeHeroIndex + 1) % $heroSlides.length);
    }, 5000);
  }

  function getPortfolioPerView() {
    if (window.innerWidth <= 768) {
      return 1;
    }
    if (window.innerWidth <= 991) {
      return 2;
    }
    return 3;
  }

  function updatePortfolio() {
    if (!$portfolioTrack.length || !$portfolioCards.length) {
      return;
    }

    const perView = getPortfolioPerView();
    const maxIndex = Math.max(0, $portfolioCards.length - perView);
    const trackGap = parseFloat(window.getComputedStyle($portfolioTrack.get(0)).gap) || 0;
    const viewportWidth = $(".portfolio-viewport").get(0).getBoundingClientRect().width;
    const cardWidth = (viewportWidth - trackGap * (perView - 1)) / perView;

    portfolioIndex = Math.min(portfolioIndex, maxIndex);
    $portfolioTrack.css("transform", `translate3d(-${portfolioIndex * (cardWidth + trackGap)}px, 0, 0)`);
    $("[data-portfolio-prev]").prop("disabled", portfolioIndex === 0);
    $("[data-portfolio-next]").prop("disabled", portfolioIndex === maxIndex);

    const firstVisible = portfolioIndex + 1;
    const lastVisible = Math.min(portfolioIndex + perView, $portfolioCards.length);
    $("#portfolioStatus").text(`Modelos ${firstVisible} a ${lastVisible} de ${$portfolioCards.length}`);
  }

  function setTimelineStep(index) {
    const item = timelineItems[index];
    const $card = $(".timeline-card");
    const $activeStep = $(`.timeline-step[data-step="${index}"]`);

    activeTimelineIndex = index;
    $activeStep
      .addClass("active")
      .attr("aria-selected", "true")
      .siblings(".timeline-step")
      .removeClass("active")
      .attr("aria-selected", "false");

    $card.removeClass("is-changing is-running");
    if ($card.length) {
      void $card.get(0).offsetWidth;
    }

    $("#timelineIndex").text(`Etapa ${String(index + 1).padStart(2, "0")}`);
    $("#timelineTitle").text(item.title);
    $("#timelineText").text(item.text);
    $card.addClass("is-changing");

    if (!shouldReduceMotion) {
      $card.addClass("is-running");
    }
  }

  function startTimelineAutoAdvance() {
    window.clearInterval(timelineTimer);
    timelineTimer = window.setInterval(() => {
      setTimelineStep((activeTimelineIndex + 1) % timelineItems.length);
    }, 4000);
  }

  if (shouldReduceMotion || !("IntersectionObserver" in window)) {
    $(".reveal").addClass("is-visible");
  } else {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -40px 0px" });

    $(".reveal").each(function () {
      revealObserver.observe(this);
    });
  }

  $("img[data-fallback]").on("error", function () {
    const fallback = $(this).data("fallback");
    if (fallback && this.src.indexOf(fallback) === -1) {
      this.src = fallback;
    }
  });

  $(window).on("resize", function () {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(updatePortfolio, 120);
  });

  $("[data-nav-toggle]").on("click", function () {
    $("body").toggleClass("nav-open", $(this).attr("aria-expanded") !== "true");
  });

  $(".navbar .nav-link, .navbar .btn").on("click", function () {
    const navElement = document.getElementById("mainNav");
    if (navElement) {
      bootstrap.Collapse.getOrCreateInstance(navElement, { toggle: false }).hide();
    }
    $("body").removeClass("nav-open");
  });

  $("[data-portfolio-prev]").on("click", function () {
    portfolioIndex = Math.max(0, portfolioIndex - 1);
    updatePortfolio();
  });

  $("[data-portfolio-next]").on("click", function () {
    const maxIndex = Math.max(0, $portfolioCards.length - getPortfolioPerView());
    portfolioIndex = Math.min(maxIndex, portfolioIndex + 1);
    updatePortfolio();
  });

  $portfolioCards.on("keydown", function (event) {
    if ($(event.target).closest("a, button").length) {
      return;
    }
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }
    event.preventDefault();
    const modalSelector = $(this).attr("data-bs-target");
    const modalElement = modalSelector ? document.querySelector(modalSelector) : null;
    if (modalElement) {
      bootstrap.Modal.getOrCreateInstance(modalElement).show(this);
    }
  });

  $(".portfolio-quote").on("click keydown", function (event) {
    event.stopPropagation();
  });

  $(".model-modal").on("show.bs.modal", function () {
    const gallery = $(this).find(".model-gallery").get(0);
    if (gallery) {
      bootstrap.Carousel.getOrCreateInstance(gallery, { interval: false, touch: true }).to(0);
    }
  });

  $(".timeline-step").on("click", function () {
    setTimelineStep(Number($(this).data("step")));
    startTimelineAutoAdvance();
  });

  $(".faq-item").removeClass("active");
  $(".faq-question").attr("aria-expanded", "false");
  $(".faq-answer").hide();

  $(".faq-question").on("click", function () {
    const $item = $(this).closest(".faq-item");
    const isOpen = $item.hasClass("active");

    $(".faq-item").removeClass("active");
    $(".faq-question").attr("aria-expanded", "false");
    $(".faq-answer").stop(true, true).slideUp(190);

    if (!isOpen) {
      $item.addClass("active");
      $(this).attr("aria-expanded", "true");
      $item.find(".faq-answer").stop(true, true).slideDown(220);
    }
  });

  $("#contactConsent").on("change", function () {
    const $form = $("#quoteForm");
    const showError = $form.hasClass("was-validated") && !this.checked;

    $(this)
      .toggleClass("is-invalid", showError)
      .attr("aria-invalid", String(showError));
    $(this).closest(".consent-check").toggleClass("has-error", showError);

    if (this.checked && $form.get(0).checkValidity()) {
      $("#formStatus").removeClass("is-error is-success").text("");
    }
  });

  $("#quoteForm").on("submit", function (event) {
    event.preventDefault();

    const $form = $(this);
    const $consent = $("#contactConsent");
    const consentAccepted = $consent.prop("checked");

    $form.addClass("was-validated");
    $consent
      .toggleClass("is-invalid", !consentAccepted)
      .attr("aria-invalid", String(!consentAccepted));
    $consent.closest(".consent-check").toggleClass("has-error", !consentAccepted);

    if (!this.checkValidity() || !consentAccepted) {
      event.stopPropagation();
      $("#formStatus")
        .removeClass("is-success")
        .addClass("is-error")
        .text("Revisa los campos obligatorios y confirma la autorización de contacto.");

      const firstInvalidField = this.querySelector(":invalid");
      if (firstInvalidField) {
        firstInvalidField.focus();
      }
      return;
    }

    const destination = $(this).data("destination");
    const name = $("#name").val().trim();
    const model = $("#model").val();
    const message = $("#message").val().trim();
    const status = `Solicitud preparada para ${destination}. ${name}, recibimos tu interés por: ${model}.`;

    $consent.removeClass("is-invalid").attr("aria-invalid", "false");
    $consent.closest(".consent-check").removeClass("has-error");
    $("#formStatus").removeClass("is-error").addClass("is-success").text(status);
    $form.find(".submit-btn").html('<i class="bi bi-check2-circle" aria-hidden="true"></i> Solicitud preparada');

    const mailSubject = encodeURIComponent("Cotización Tiny House Osorno");
    const mailBody = encodeURIComponent(`Nombre: ${name}\nCorreo: ${$("#email").val()}\nTeléfono: ${$("#phone").val()}\nModelo: ${model}\nMensaje: ${message}`);
    window.setTimeout(() => {
      window.location.href = `mailto:${destination}?subject=${mailSubject}&body=${mailBody}`;
    }, 450);
  });

  $(window).on("beforeunload", function () {
    window.clearInterval(heroTimer);
    window.clearInterval(timelineTimer);
    window.clearTimeout(resizeTimer);
  });

  setHeroSlide(0);
  startHeroSlideshow();
  updatePortfolio();
  setTimelineStep(0);
  startTimelineAutoAdvance();
});
