function displayAbstract(i_pub)
{
    if (i_pub==0){
        document.getElementById("abstract_txt").innerHTML = `The application of dynamic soaring techniques on
        small unmanned aerial vehicles (SUAVs) aims to exploit naturally occurring wind gradients to increase 
        flight endurance. However, considering the limited computational resources onboard SUAVs and the imperfect
        nature of real-world environments and physical systems, there is a practical need to design simple and 
        robust control systems. As such, this paper presents a neuroevolutionary strategy for generating efficient
        neurocontrollers that exhibit generalized and robust behavior. The Neuroevolution of Augmenting Topologies
        (NEAT) algorithm is applied to evolve networks in a way that preserves simplicity while maximizing performance.
        Simulated flight tests in stochastic environments show that resulting controllers can perform dynamic soaring
        for a range of initial conditions and time-varying parameters. Flight trajectories and robustness metrics are
        presented and compared for a small autonomous aircraft operating in such environments.`;
    } else if (i_pub==1){
        document.getElementById("abstract_txt").innerHTML = `This paper presents a neural network-based
        soaring strategy to extend flight times and advance the potential operational capability of SUAVs. In
        this study, the Neuroevolution of Augmenting Topologies (NEAT) algorithm is used to train efficient
        and effective neurocontrollers that can control a simulated aircraft along sustained dynamic and
        thermal soaring trajectories. The proposed approach evolves interpretable neural networks in a
        way that preserves simplicity while maximizing performance without requiring extensive training
        datasets. As a result, the combined trajectory planning and aircraft control strategy is suitable for
        real-time implementation on SUAV platforms.`;
    } else if (i_pub==2){
        document.getElementById("abstract_txt").innerHTML = `This study explores the use of the Neuroevolution of
        Augmenting Topologies algorithm to train efficient, effective, and robust neurocontrollers that can control
        a simulated aircraft along sustainable soaring trajectories in the presence of varying initial states and
        environmental conditions, stochastic disturbances, and system noise. The proposed approach evolves neural
        networks in a way that preserves simplicity while maximizing performance, which allows the resulting policies
        to be understood, implemented, and operated onboard real-time SUAV platforms.
        This research introduces the novel neuroevolutionary control method whose applicability is
        not limited to aerial systems, a method of quantifying and measuring robustness for the comparison of different
        control solutions, a set of metrics to identify the topological characteristics that encode robustness, and
        validation for the presented approach in the form of a software-in-the-loop implementation.`;
    } else if (i_pub==3){
        document.getElementById("abstract_txt").innerHTML = `The motivation behind this project was to design and implement
        a 2x2 MIMO system to wirelessly transmit data through two SDRs as a starting point to the greater concept that is the cognitive radio.
        This project aims to explore the implementation of a functional system on the Universal Software Radio Peripheral
        (USRP) X310 using MATLAB’s Simulink environment. The scope of this project is bounded to using the Alamouti
        orthogonal space time block code (OSTBC) scheme along with two modulation schemes - quadrature and
        binary phase shift keying (Q/BPSK) - to transmit a Joint Photographic Experts Group (JPEG)
        image over a wireless channel. The designed communication protocol is unique to this project
        and is not restricted to any industry standard.`;
    } else if (i_pub==4){
        document.getElementById("abstract_txt").innerHTML = `The flight endurance of small unmanned aerial vehicles can be significantly extended
        through the exploitation of naturally occurring wind phenomena. However, due to the limited computational hardware on board such
        aircraft and the uncertain, stochastic nature of real-world environments, there is a need for efficient and robust strategies 
    that exhibit generalized behavior. In addressing these objectives, recent efforts have explored the use of artificial intelligence 
    training algorithms and neural networks for the design of autonomous control schemes that exploit such wind phenomena. This study 
    incorporates the Neuroevolution of Augmenting Topologies algorithm with domain randomization to train robust neurocontrollers that 
    can control an aircraft along sustained traveling dynamic soaring trajectories in the presence of uncertainties and disturbances. 
    This work presents the developed strategy for integrating robustness in neural network control systems, provides a method for quantifying 
    and comparing robustness, and introduces an approach for identifying the network characteristics that contribute to the evolved robust behavior.`;
    }
}

// Show/hide mobile menu
function openMobileNav() {
    var x = document.getElementById("shutter");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    return false;
}

window.addEventListener('mouseup', function(event){
	var box = document.getElementById('shutter');
    var toggle = document.getElementById('mobilenav-tog');
	if (event.target != box && event.target.parentNode != box && event.target.parentNode != toggle){
        box.style.display = 'none';
    }
});

// Change about image on hover
function onHover(dir)
{
    $("#moi_png").attr('src', dir);
}

function offHover(dir)
{
    $("#moi_png").attr('src', dir);
}

if (screen.width <= 992){
    $("#moi_png").attr('src', 'img/portrait-colour.png');
}