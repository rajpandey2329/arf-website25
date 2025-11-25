    /* ======================================================================
    PROFESSIONAL CHIP BLUEPRINT ANIMATION  (UNCHANGED)
    ====================================================================== */
    const canvas = document.getElementById("chipBoard");
    const ctx = canvas.getContext("2d");
    resize();

    let grid = [], flow = [], nodes = [];
    const GRID_COLOR   = "rgba(130, 185, 225, 0.45)";
    const FLOW_COLOR   = "rgba(255,255,255,0.92)";
    const NODE_COLOR   = "rgba(220,240,255,0.88)";
    const BG_SHADE     = "rgba(15, 22, 34, 0.22)";

    generate();

    function generate() {
        grid = []; flow = []; nodes = [];
        const rows = 14;
        for (let i = 0; i < rows; i++) {
            const y = (canvas.height / rows) * i + 40;
            let x = 0, segments = [];
            while (x < canvas.width) {
                const len = Math.random() * 120 + 110;
                segments.push({ x, len });
                x += len + Math.random() * 65 + 50;
            }
            grid.push({ y, segments });
            flow.push({
                y,
                x: Math.random() * canvas.width,
                len: Math.random() * 90 + 28,
                speed: Math.random() * 1.15 + 0.55
            });
        }
        for (let i = 0; i < 18; i++) {
            nodes.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 3.5 + 3,
                p: Math.random() * Math.PI * 2
            });
        }
    }

    function drawGrid() {
        ctx.lineWidth = 1.2;
        grid.forEach(row =>
            row.segments.forEach(seg => {
                ctx.beginPath();
                ctx.moveTo(seg.x, row.y);
                ctx.lineTo(seg.x + seg.len, row.y);
                ctx.strokeStyle = GRID_COLOR;
                ctx.stroke();
            })
        );
    }
    function drawFlow() {
        ctx.lineWidth = 2;
        flow.forEach(s => {
            ctx.beginPath();
            ctx.moveTo(s.x, s.y);
            ctx.lineTo(s.x + s.len, s.y);
            ctx.strokeStyle = FLOW_COLOR;
            ctx.stroke();
            s.x += s.speed;
            if (s.x > canvas.width) s.x = -160;
        });
    }
    function drawNodes() {
        nodes.forEach(n => {
            n.p += 0.016;
            ctx.beginPath();
            ctx.arc(n.x, n.y, n.size, 0, Math.PI * 2);
            ctx.fillStyle = NODE_COLOR;
            ctx.globalAlpha = 0.55 + Math.sin(n.p) * 0.18;
            ctx.fill();
        });
        ctx.globalAlpha = 1;
    }

    let mouse = { x: null, y: null };
    window.addEventListener("mousemove", e => (mouse = { x: e.clientX, y: e.clientY }));
    window.addEventListener("mouseout", () => (mouse.x = null));

    function highlight() {
        if (!mouse.x) return;
        const closest = grid.reduce((a, b) =>
            Math.abs(mouse.y - a.y) < Math.abs(mouse.y - b.y) ? a : b
        );
        ctx.beginPath();
        ctx.moveTo(0, closest.y);
        ctx.lineTo(canvas.width, closest.y);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.13)";
        ctx.lineWidth = 2;
        ctx.stroke();
    }

    function animate() {
        ctx.fillStyle = BG_SHADE;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        drawGrid();
        drawFlow();
        drawNodes();
        highlight();
        requestAnimationFrame(animate);
    }
    animate();

    window.addEventListener("resize", () => { resize(); generate(); });
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    document.querySelectorAll(".fade").forEach(el => {
        window.addEventListener("scroll", () => {
            el.getBoundingClientRect().top < window.innerHeight - 80 &&
            el.classList.add("show");
        });
    });

    /* CHIP PARALLAX */
    const chipSVG = document.querySelector(".chip-svg");
    document.addEventListener("mousemove", e => {
        const movX = (e.clientX / window.innerWidth - 0.5) * 10;
        const movY = (e.clientY / window.innerHeight - 0.5) * 10;
        chipSVG.style.transform = `scale(1.06) translate(${movX}px, ${movY}px)`;
    });

    /* ======================================================================
    QUALCOMM-STYLE NAVBAR ARROW ANIMATION (NEW ADD)
    ====================================================================== */
    document.querySelectorAll(".q-links li").forEach(item => {
        item.addEventListener("mouseenter", () => {
            let arrow = item.querySelector(".arrow");
            if (arrow) arrow.style.transform = "rotate(225deg)";
        });
        item.addEventListener("mouseleave", () => {
            let arrow = item.querySelector(".arrow");
            if (arrow) arrow.style.transform = "rotate(45deg)";
        });
    });

    document.addEventListener("DOMContentLoaded", () => {
        const form = document.getElementById("loginForm");
        if (!form) return;

        form.addEventListener("submit", (e) => {
            e.preventDefault();

            let id = document.getElementById("empID").value.trim();
            let pass = document.getElementById("password").value.trim();

            if (id === "" || pass === "") {
                alert("⚠ Please enter Employee ID and Password");
                return;
            }

            // Demo authentication
            if (id === "EMP001" && pass === "admin123") {
                alert("✔ Login Successful");
                window.location.href = "/dashboard";     // redirect page
            } else {
                alert("❌ Invalid Credentials");
            }
        });
    });


    /* ==========================================
    PRO SEMICONDUCTOR SIGNAL-GLOW ENGINE
    ========================================== */
    const neon = document.createElement("canvas");
    neon.id = "neonChip";
    document.body.appendChild(neon);

    const nCtx = neon.getContext("2d");
    resizeNeon();

    let sparks = [];
    for (let i = 0; i < 80; i++) {
        sparks.push({
            x: Math.random() * neon.width,
            y: Math.random() * neon.height,
            r: Math.random() * 2 + 1,
            dx: Math.random() * 1.6 - 0.8,
            dy: Math.random() * 1.6 - 0.8
        });
    }

    function drawNeon() {
        nCtx.clearRect(0, 0, neon.width, neon.height);
        sparks.forEach(s => {
            s.x += s.dx; s.y += s.dy;
            if (s.x < 0 || s.x > neon.width) s.dx *= -1;
            if (s.y < 0 || s.y > neon.height) s.dy *= -1;

            nCtx.beginPath();
            nCtx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
            nCtx.fillStyle = "rgba(0, 168, 255, .8)";
            nCtx.shadowBlur = 14;
            nCtx.shadowColor = "rgba(0, 168, 255, .8)";
            nCtx.fill();
        });
        requestAnimationFrame(drawNeon);
    }
    drawNeon();

    function resizeNeon() {
        neon.width = window.innerWidth;
        neon.height = window.innerHeight;
    }
    window.addEventListener("resize", resizeNeon);

    /* SMOOTH SCROLL FADE */
    window.addEventListener("scroll", () => {
        document.querySelectorAll(".reveal").forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight - 80)
                el.classList.add("active");
        });
    });


    /* ==========================================================
    SUBSCRIBE POPUP MODAL (FINAL FIXED)
    ========================================================== */
    document.addEventListener("DOMContentLoaded", () => {
        console.log("Subscribe Modal JS Loaded");

        const subscribeBtn = document.querySelector(".subscribe-btn");
        const modal = document.getElementById("subscribeModal");
        const closeModal = document.querySelector(".modal-close");

        if (!subscribeBtn) console.log("❌ subscribe-btn NOT found");
        if (!modal) console.log("❌ subscribeModal NOT found");

        // Open popup
        if (subscribeBtn && modal) {
            subscribeBtn.addEventListener("click", () => {
                console.log("Subscribe clicked");
                modal.classList.add("active");
            });
        }

        // Close popup using X button
        if (closeModal && modal) {
            closeModal.addEventListener("click", () => {
                modal.classList.remove("active");
            });
        }

        // Close popup by clicking outside
        window.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.classList.remove("active");
            }
        });
    });

