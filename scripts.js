// Simple exercise lookup table: using YouTube links or royalty-free images
// (You can swap the URLs with your own images/videos if you have rights)
const exerciseData = {
    warmup: {
        title: "Warmup and Streching",
        type: "video",
        src: "Streching and Warmup.mp4"
    },
    hiitcardio: {
        title: "HIIT Cardio",
        type: "video",
        src: "https://www.youtube.com/embed/adDGcsdu8WY?si=Uoj-TbTWd27tz6s0&amp;start=61"
    },
    bench: {
        title: "Dumbbell Bench Press",
        type: "video",
        src: "https://www.youtube.com/embed/VmB1G1K7v94?si=1VmLB8pSCdeY_qH9",
        desc: "A compound chest movement focusing on pecs, triceps, and shoulders. Lie flat, lower bar to chest, press upward."
    },
    inclinedb: {
        title: "Incline Dumbbell Press",
        type: "video",
        src: "https://www.youtube.com/embed/8iPEnn-ltC8",
        desc: "Keeps more tension on upper chest. Maintain a slight arch; press dumbbells upward from shoulder level."
    },
    fly: {
        title: "Cable Fly (High, Middle & Low)",
        type: "videos",
        srcs: [
            {
                label: "High Cable Fly",
                src: "https://www.youtube.com/embed/Iwe6AmxVf7o?si=wJaWLKk68miecESn"
            },
            {
                label: "Middle Cable Fly",
                src: "https://www.youtube.com/embed/WEM9FCIPlxQ?si=IkNqY3wK2I2OmrW4"
            },
            {
                label: "Low Cable Fly",
                src: "https://www.youtube.com/embed/M1N804yWA-8?si=XUoMWaZingbzjVoJ"
            }
        ],
        desc: "High and low cable fly variations target different chest fibers. Lean slightly forward and control each rep."
    },
    skull: {
        title: "Skull Crushers",
        type: "video",
        src: "https://www.youtube.com/embed/ir5PsbniVSc",
        desc: "A triceps isolation move. Lower bar to forehead, elbows stay tight, extend arms to top."
    },
    ropepushdown: {
        title: "Triceps Rope Pushdown",
        type: "video",
        src: "https://www.youtube.com/embed/2-LAMcpzODU",
        desc: "Use a cable station. Elbows close, push rope down and apart, contract triceps hard."
    },
    ohdbext: {
        title: "Overhead Dumbbell Extension",
        type: "video",
        src: "https://www.youtube.com/embed/-Vyt2QdsR7E",
        desc: "Seated or standing, press dumbbells overhead, elbows pointing up. Good for long-head triceps."
    },
    pullup: {
        title: "Lat Pulldown",
        type: "video",
        src: "https://www.youtube.com/embed/X5n55mMqSUs?si=_lPq_FTvV5X9K7bA",
        desc: "Classic back builder. Pull body or bar down, squeeze shoulder blades together at top."
    },
    borow: {
        title: "Barbell Bent Over Row",
        type: "video",
        src: "https://www.youtube.com/embed/vT2GjY_Umpw",
        desc: "Flat back, bend at hips, pull bar to belly button, elbows back."
    },
    cablerow: {
        title: "Seated Cable Row",
        type: "video",
        src: "https://www.youtube.com/embed/GZbfZ033f74?si=b7BNOlzmuGGkqSxN",
        desc: "Sit upright, pull cable handle to abs, squeeze back, control eccentric."
    },
    bbcurl: {
        title: "Barbell Curl",
        type: "video",
        src: "https://www.youtube.com/embed/kwG2ipFRgfo",
        desc: "Keep elbows still, curl bar up, squeeze biceps at top."
    },
    inclinedbcurl: {
        title: "Incline Dumbbell Curl",
        type: "video",
        src: "https://www.youtube.com/embed/sAq_ocpRh_I",
        desc: "Lean on bench, allow arms to stretch down, full range biceps contraction."
    },
    hammercurl: {
        title: "Hammer Curl",
        type: "video",
        src: "https://www.youtube.com/embed/zC3nLlEvin4",
        desc: "Neutral grip, curl dumbbells up, works brachialis and forearms."
    },
    dbpress: {
        title: "Seated Dumbbell Press",
        type: "video",
        src: "https://www.youtube.com/embed/qEwKCR5JCog",
        desc: "Keep core tight, press dumbbells overhead, avoid locking out elbows."
    },
    lateralraise: {
        title: "Lateral Raises",
        type: "video",
        src: "https://www.youtube.com/embed/3VcKaXpzqRo",
        desc: "Raise dumbbells sideways, elbows soft, focus on shoulders not traps."
    },
    reardelt: {
        title: "Rear Delt Fly (Cable/Machine)",
        type: "video",
        src: "https://www.youtube.com/embed/6cHY60y7QRU?si=2uALKxEQHF29o2QM",
        desc: "Squeeze shoulder blades, keep arms slightly bent, move slowly."
    },
    squat: {
        title: "Barbell Squats",
        type: "video",
        src: "https://www.youtube.com/embed/nFAscG0XUNY?si=tMKzhlgwdb7FlhSt",
        desc: "Feet shoulder width apart, squat below parallel, keep chest up."
    },
    rdl: {
        title: "Romanian Deadlifts",
        type: "videos",
        srcs: [
            {
                label: "Barbell Romanian Deadlift",
                src: "https://www.youtube.com/embed/JCXUYuzwNrM?si=u4DoRwWa3v3KA68j"
            },
            {
                label: "Dumbbell Romanian Deadlift",
                src: "https://www.youtube.com/embed/FQKfr1YDhEk?si=toJVek8ig9WFBIPj"
            }
        ],
        desc: "Hip hinge, knees soft, lower bar while keeping back straight."
    },
    lunges: {
        title: "Walking Lunges",
        type: "video",
        src: "https://www.youtube.com/embed/QOVaHwm-Q6U",
        desc: "Step forward, lower back knee to floor, push through front heel."
    },
    standcalf: {
        title: "Calves Raises",
        type: "video",
        src: "https://www.youtube.com/embed/ADIDoYt_ko4?si=OHWPw05h7HYVcxqS",
        desc: "Raise heels using calves, control descent."
    },
    inclinebb: {
        title: "Incline Barbell Press",
        type: "video",
        src: "https://www.youtube.com/embed/DbFgADa2PL8",
        desc: "Bench set to 30–45°, press barbell from upper chest upward."
    },
    flatdb: {
        title: "Flat Dumbbell Press",
        type: "video",
        src: "https://www.youtube.com/embed/p8-FE5a5F6E",
        desc: "Keep wrists neutral, press dumbbells together at top."
    },
    pecdeck: {
        title: "Pec Deck",
        type: "video",
        src: "https://www.youtube.com/embed/GOR-q5plI3o?si=n1MU6DmONKBeqSbN&amp;start=54",
        desc: "Squeeze pecs, slow and controlled, full stretch on each rep."
    },
    cgbench: {
        title: "Close-Grip Dumbbell Press",
        type: "video",
        src: "https://www.youtube.com/embed/eebXpmPGy2Y?si=P1cNtQyMCzZM_nli&amp;start=5",
        desc: "Hands shoulder width, tuck elbows, control bar path."
    },
    dbkickback: {
        title: "Dumbbell Kickbacks",
        type: "video",
        src: "https://www.youtube.com/embed/6SS6K3lAwZ8?si=t9UM92YLLv6YN484",
        desc: "Flat back, triceps fully extend behind, pinkie up."
    },
    overheadrope: {
        title: "Overhead Rope Extension",
        type: "video",
        src: "https://www.youtube.com/embed/qxajRdVVEFo?si=_4Xu4XinknaB--2v&amp;start=30",
        desc: "Anchor rope overhead, extend arms, squeeze triceps."
    },
    tbarrow: {
        title: "T-Bar Row",
        type: "video",
        src: "https://www.youtube.com/embed/j3Igk5nyZE4?si=Pcw_RQCGg2D-Az3b&amp;start=78",
        desc: "Neutral grip, pull weight to lower abs, stay tight."
    },
    widelpdown: {
        title: "Wide Grip Lat Pulldown",
        type: "video",
        src: "https://www.youtube.com/embed/CAwf7n6Luuc",
        desc: "Lean back slightly, pull bar to upper chest, elbows wide."
    },
    hyprextnstn: {
        title: "Hyper Extension",
        type: "video",
        src: "https://www.youtube.com/embed/ph3pddpKzzw?si=UocQiUDBT-xts2dA&amp;start=42",
        desc: "Lie face down on the bench, bend forward at the hips, then lift your torso back up."
    },
    preachercurl: {
        title: "Preacher Curl",
        type: "video",
        src: "https://www.youtube.com/embed/3mtXqrkbEfI?si=UYK78vA_4coGGVP3&amp;start=26",
        desc: "Arms on pad, full stretch, curl up with squeeze."
    },
    cablecurl: {
        title: "Cable Curl",
        type: "video",
        src: "https://www.youtube.com/embed/AsAVbj7puKo?si=n0fUfHnPtUCNPiAu&amp;start=38",
        desc: "Strict form, elbows fixed, squeeze biceps hard."
    },
    concurl: {
        title: "Concentration Curl",
        type: "video",
        src: "https://www.youtube.com/embed/Jvj2wV0vOYU?si=yKPm52JJL7sAW0H2&amp;start=32",
        desc: "Sit, elbow on thigh, raise dumbbell, peak contraction."
    },
    dbpress: {
        title: "Seated Dumbbell Press",
        type: "video",
        src: "https://www.youtube.com/embed/qEwKCR5JCog",
        desc: "Stand tall, core tight, press barbell overhead."
    },
    uprightrow: {
        title: "Upright Row",
        type: "video",
        src: "https://www.youtube.com/embed/qr3ziolhjvQ?si=qrzp_mUpQKt-JfK4",
        desc: "Hands close, bar pulls up to chin, elbows higher than wrists."
    },
    dbdropset: {
        title: "Dumbbell Lateral Raise Dropset",
        type: "video",
        src: "https://www.youtube.com/embed/3VcKaXpzqRo",
        desc: "Start heavy, move to lighter dumbbells in succession, minimal rest."
    },
    bulgarianss: {
        title: "Bulgarian Split Squats",
        type: "video",
        src: "https://www.youtube.com/embed/2C-uNgKwPLE",
        desc: "Rear foot on bench, lower back knee, keep front knee over toes."
    },
    legpress: {
        title: "Leg Press",
        type: "video",
        src: "https://www.youtube.com/embed/K5n2vg3oZa4?si=mp5p4WN0ZzOj9Nc8&amp;start=51",
        desc: "Focus on foot placement, full depth, do not lock knees out."
    },
    legcurl: {
        title: "Leg Extension and Curl",
        type: "videos",
        srcs: [
            {
                label: "Leg Extension",
                src: "https://www.youtube.com/embed/mMvQmjN-EBs?si=9mH0kIjDUDh0IAbn&amp;start=15"
            },
            {
                label: "Leg Curl",
                src: "https://www.youtube.com/embed/mMvQmjN-EBs?si=jrkdOYtjWKp5mM_V&amp;start=40"
            }
        ],
        desc: "Control both the curl and extension, squeeze hamstrings."
    },
};

function showModal(exKey) {
    var data = exerciseData[exKey];
    if (data) {
        document.getElementById("modalTitle").textContent = data.title;
        var mediaHtml = "";
        if (data.type === "video") {
            // If it's a local mp4, use the native video player
            if (data.src.toLowerCase().endsWith(".mp4")) {
                mediaHtml = `
            <video class="modal-video" controls>
                <source src="${data.src}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        `;
            } else {
                // Else, treat as embed (YouTube, Vimeo, etc.)
                mediaHtml = `<iframe class='modal-video' src='${data.src}' title='${data.title}' frameborder='0' allowfullscreen allow='autoplay'></iframe>`;
            }
        }
        else if (data.type === "videos") {
            mediaHtml = data.srcs.map(v =>
                `<div style="margin-bottom:15px">
          <div style="font-size:0.99em;color:#203975;margin-bottom:4px;">${v.label}</div>
          <iframe class='modal-video' src='${v.src}' title='${v.label}' frameborder='0' allowfullscreen allow='autoplay'></iframe>
         </div>`
            ).join('');
        } else if (data.type === "img") {
            mediaHtml = `<img class='modal-img' src='${data.src}' alt='${data.title}' />`;
        }
        document.getElementById("modalMedia").innerHTML = mediaHtml;
        document.getElementById("modalDesc").textContent = data.desc;
        document.getElementById("exModalbg").style.display = 'flex';
    }
}

function hideModal() {
    document.getElementById("exModalbg").style.display = 'none';
    document.getElementById("modalMedia").innerHTML = "";
}
// Bind click events to exercise buttons
document.querySelectorAll('.workout-ex').forEach(btn => {
    btn.onclick = () => showModal(btn.dataset.ex);
});
// Hide modal on background click
document.getElementById("exModalbg").onclick = function (e) {
    if (e.target === this) {
        hideModal();
    }
}

// Timer
let countdown;
let remainingTime = 60; // default 1 minute

// Preload sound (you can replace with your own .mp3 or .wav file)
let timerSound = new Audio("https://actions.google.com/sounds/v1/alarms/beep_short.ogg");

function updateTimerDisplay() {
    let minutes = String(Math.floor(remainingTime / 60)).padStart(2, '0');
    let seconds = String(remainingTime % 60).padStart(2, '0');
    document.getElementById("timerDisplay").textContent = `${minutes}:${seconds}`;
}

function startTimer() {
    if (!countdown) {
        // Always read new input values at start
        let mins = parseInt(document.getElementById("minutesInput").value) || 0;
        let secs = parseInt(document.getElementById("secondsInput").value) || 0;
        remainingTime = mins * 60 + secs;

        updateTimerDisplay();
        countdown = setInterval(() => {
            remainingTime--;
            updateTimerDisplay();
            if (remainingTime <= 0) {
                clearInterval(countdown);
                countdown = null;
                timerSound.play(); // play the sound
                alert("Time's up! ⏱");
            }
        }, 1000);
    }
}

// Timer Toggle
document.getElementById("timerToggle").onclick = function () {
    const box = document.getElementById("timerBox");
    if (box.style.display === "none" || box.style.display === "") {
        box.style.display = "block";
    } else {
        box.style.display = "none";
    }
};


function pauseTimer() {
    clearInterval(countdown);
    countdown = null;
}

function resetTimer() {
    pauseTimer();
    let mins = parseInt(document.getElementById("minutesInput").value) || 0;
    let secs = parseInt(document.getElementById("secondsInput").value) || 0;
    remainingTime = mins * 60 + secs;
    updateTimerDisplay();
}

// Initialize display
updateTimerDisplay();


