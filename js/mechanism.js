dummy_json = {
        "0": {
            "title": "large graph mining patterns explanations and cascade analysis",
            "property": {
                "mechanism_tokens": "We present a long list of static and temporal laws , and"
            }
        },
        "81": {
            "title": "Grounding Spatial Relations for Outdoor Robot Navigation",
            "property": {
                "mechanism_tokens": "We propose a language-driven navigation approach We consider unknown environments that contain previously unseen objects The proposed approach Robots receive from human teammates commands in natural language , such as `` Navigate around the building to the car left of the fire hydrant and near the tree { '' } . A robot needs first to classify its surrounding objects into categories , using images obtained from its sensors . The result of this classification is a map of the environment , where each object is given a list of semantic labels , such as `` tree { '' } and `` car { '' } , with varying degrees of confidence . Then , the robot needs to ground the nouns in the command We use a probabilistic model , such as `` left of { '' } and `` near { '' } The model is learned from examples provided by humans . For each noun in the command , a distribution on the objects in the environment is computed by combining spatial constraints with a prior given as the semantic classifier 's confidence values The robot needs also to ground the navigation mode specified in the command , such as `` navigate quickly { '' } and `` navigate covertly { '' } , as a cost map . The cost map is also learned from examples , using Inverse Optimal Control ( IOC ) . The cost map and the grounded goal are used to generate a path for the robot ."
            }
        },
        "82": {
            "title": "towards human computable passwords",
            "property": {
                "mechanism_tokens": "We propose several candidate authentication protocols -- - a computer that stores information and performs computations correctly but does not provide confidentiality Our schemes use a semi-trusted computer to store and display public challenges $ C_i\\in [ n ] ^k $ . The human user memorizes a random secret mapping $ \\sigma : [ n ] \\rightarrow\\mathbb { Z } _d $ and authenticates by computing responses $ f ( \\sigma ( C_i ) ) $ to a sequence of public challenges where $ f : \\mathbb { Z } _d^k\\rightarrow\\mathbb { Z } _d $ is a function that is easy for the human to evaluate . We prove that any statistical adversary needs to sample $ m=\\tilde { \\Omega } ( n^ { s ( f ) } ) $ challenge-response pairs to recover $ \\sigma $ , for a security parameter $ s ( f ) $ that depends on two key properties of $ f $ . To obtain our results , we apply the general hypercontractivity theorem to lower bound the statistical dimension of the distribution over challenge-response pairs induced by $ f $ and $ \\sigma $ . Our lower bounds apply to arbitrary functions $ f $ ( not just to functions that are easy for a human to evaluate ) , and generalize recent results of Feldman et al ."
            }
        },
        "83": {
            "title": "restricting exchangeable nonparametric distributions",
            "property": {
                "mechanism_tokens": "In this paper , we propose a class of exchangeable nonparametric priors obtained by restricting the domain of existing models Such models allow us to specify the distribution over the number of features per data point ,"
            }
        },
        "84": {
            "title": "nearly linear work parallel sdd solvers low diameter decomposition and low stretch subgraphs",
            "property": {
                "mechanism_tokens": "We present the design and analysis of a nearly-linear work parallel algorithm On input an SDD n-by-n matrix A with m nonzero entries and a vector b , our algorithm computes a vector $ \\tilde { x } $ such that $ \\|\\tilde { x } - A^ { + } b\\|_ { A } \\leq\\varepsilon\\cdot\\| { A^ { + } b } \\|_ { A } $ in $ O ( m\\log^ { O ( 1 ) } { n } \\log { \\frac { 1 } { \\varepsilon } } ) $ work and $ O ( m^ { 1/3+\\theta } \\log\\frac { 1 } { \\varepsilon } ) $ depth for any ? > 0 , where A + denotes the Moore-Penrose pseudoinverse of A . The algorithm relies on a parallel algorithm for generating low-stretch spanning trees or spanning subgraphs To this end , we first develop a parallel decomposition algorithm that in O ( mlog O ( 1 ) n ) work and polylogarithmic depth , partitions a graph with n nodes and m edges into components with polylogarithmic diameter such that only a small fraction of the original edges are between the components . This can be used to generate low-stretch spanning trees with average stretch O ( n ? ) in O ( mlog O ( 1 ) n ) work and O ( n ? ) depth for any ? > 0 . Alternatively , it can be used to generate spanning subgraphs with polylogarithmic average stretch in O ( mlog O ( 1 ) n ) work and polylogarithmic depth . We apply this subgraph construction to derive a parallel linear solver"
            }
        },
        "85": {
            "title": "Gather-Scatter DRAM: In-DRAM Address Translation to Improve the Spatial Locality of Non-unit Strided Accesses",
            "property": {
                "mechanism_tokens": "We propose the Gather-Scatter DRAM ( GS-DRAM ) We observe that a commodity DRAM module contains many chips Each chip stores a part of every cache line mapped to the module . To realize this idea , GS-DRAM first maps the data of each cache line to different chips such that multiple values of a strided access pattern are mapped to different chips Second , instead of sending a separate address to each chip , GS-DRAM maps each strided pattern to a small pattern ID that is communicated to the module . Based on the pattern ID , each chip independently computes the address of the value to be accessed . The cache line returned by the module contains different values of the strided pattern gathered from different chips"
            }
        },
        "86": {
            "title": "histograms of motion gradients for real time video classification",
            "property": {
                "mechanism_tokens": "In this work we propose a very efficient approach Our method is based on a simple temporal and spatial derivation , which captures the changes between two consecutive frames ."
            }
        },
        "87": {
            "title": "Parallel Functional Arrays",
            "property": {
                "mechanism_tokens": "to develop a form of functional arrays ( sequences The key idea is to consider sequences with functional value semantics but nonfunctional cost semantics . Because the value semantics is functional , `` updating { '' } a sequence returns a new sequence . We allow operations on `` older { '' } sequences ( called interior sequences ) to be more expensive than operations on the `` most recent { '' } sequences ( called leaf sequences ) . We embed sequences in a language supporting fork-join parallelism . Due to the parallelism , operations can be interleaved non-deterministically , and , in conjunction with the different cost for interior and leaf sequences , this can lead to non-deterministic costs for a program . Consequently the costs of programs can be difficult to analyze . The main result is the derivation of a deterministic cost dynamics which makes analyzing the costs easier . We present a wait-free concurrent implementation of sequences that requires constant work for accessing and updating leaf sequences , and logarithmic work for accessing and linear work for updating interior sequences"
            }
        },
        "88": {
            "title": "deviation analysis of the design intent and implemented controls of hvac systems using sensor data a case study",
            "property": {
                "mechanism_tokens": ""
            }
        },
        "89": {
            "title": "A Classroom Study of Using Crowd Feedback in the Iterative Design Process",
            "property": {
                "mechanism_tokens": ""
            }
        },
        "90": {
            "title": "sedmid for confusion detection uncovering mind state from time series brain wave data",
            "property": {
                "mechanism_tokens": "In this paper , we propose an extension of State Space Model to work with different sources of information together with its learning and inference algorithms ."
            }
        },
        "91": {
            "title": "ppdsparse a parallel primal dual sparse method for extreme classification",
            "property": {
                "mechanism_tokens": "In this work , we extend PD-Sparse . By introducing separable loss functions , we can scale out the training , with network communication and space efficiency comparable to those in one-versus-all approaches while maintaining an overall complexity sub-linear in the number of classes ."
            }
        },
        "92": {
            "title": "finding dependencies between actions using the crowd",
            "property": {
                "mechanism_tokens": "we introduce ARchitect , a system that uses the crowd to capture the dependency structure of the actions that make up activities ."
            }
        },
        "93": {
            "title": "signal processing on graphs causal modeling of big data",
            "property": {
                "mechanism_tokens": "This paper presents a computationally tractable algorithm This graph is directed and weighted , possibly representing causal relations , not just reciprocal correlations as in many existing approaches in the literature . A detailed convergence analysis is carried out"
            }
        },
        "94": {
            "title": "Optimal Bounds for Estimating Entropy with PMF Queries",
            "property": {
                "mechanism_tokens": ""
            }
        },
        "95": {
            "title": "Playing Catch with Robots: Incorporating Social Gestures into Physical Interactions",
            "property": {
                "mechanism_tokens": ""
            }
        },
        "96": {
            "title": "Dynamic Multi-Heuristic A",
            "property": {
                "mechanism_tokens": "In this work , our primary contribution is a method in addition to the original heuristic ( s ) used , With the ability to escape local minima easily , the effect of dimensionality becomes less pronounced ."
            }
        },
        "97": {
            "title": "cryptgraph privacy preserving graph analytics on encrypted graph",
            "property": {
                "mechanism_tokens": "we propose CryptGraph , which runs graph analytics on encrypted graph In CryptGraph , users encrypt their graphs before uploading them to the cloud . The cloud runs graph analysis on the encrypted graphs and obtains results which are also in encrypted form that the cloud can not decipher . During the process of computing , the encrypted graphs are never decrypted on the cloud side . The encrypted results are sent back to users and users perform the decryption to obtain the plaintext results . In this process , users ' graphs and the analytics results are both encrypted and the cloud knows neither of them Thereby , users ' privacy can be strongly protected . Meanwhile , with the help of homomorphic encryption , the results analyzed from the encrypted graphs are guaranteed to be correct . we propose hard computation outsourcing"
            }
        },
        "98": {
            "title": "Distributed Learning of Multilingual DNN Feature Extractors using GPUs",
            "property": {
                "mechanism_tokens": "We propose the DistModel and DistLang frameworks which distribute feature extractor learning by models and languages respectively The time-synchronous DistModel has the nice property of tolerating infrequent model averaging . With 3 GPUs , DistModel achieves 2.6x speed-up and causes no loss on word error rates ."
            }
        },
        "99": {
            "title": "dynamic influence maximization under increasing returns to scale",
            "property": {
                "mechanism_tokens": "We formulate a dynamic influence maximization problem under increasing returns We propose a simple algorithm in this model which chooses the best time period to use up the entire budget ( called Best-Stage ) , and We also propose a heuristic algorithm for this problem of which Best-Stage decision is a special case"
            }
        },
        "100": {
            "title": "Reconstructing 3D Human Pose from 2D Image Landmarks",
            "property": {
                "mechanism_tokens": "We present an activity-independent method leveraging a large motion capture corpus as a proxy for visual memory Our method solves for anthropometrically regular body pose and explicitly estimates the camera via a matching pursuit algorithm operating on the image projections Anthropometric regularity ( i.e. , that limbs obey known proportions ) is a highly informative prior , but directly applying such constraints is intractable . Instead , we enforce a necessary condition on the sum of squared limb-lengths that can be solved for in closed form to discourage implausible configurations in 3D ."
            }
        },
        "101": {
            "title": "Base-Delta-Immediate Compression: Practical Data Compression for On-Chip Caches",
            "property": {
                "mechanism_tokens": "In this paper , we introduce a new compression algorithm called Base-Delta-Immediate ( B Delta I ) compression , The key idea is that , for many cache lines , the values within the cache line have a low dynamic range - i. e. , the differences between values stored within the cache line are small . As a result , a cache line can be represented using a base value and an array of differences whose combined size is much smaller than the original cache line ( we call this the base+ delta encoding Moreover , many cache lines intersperse such base+ delta values with small values - our B Delta I technique efficiently incorporates such immediate values into its encoding"
            }
        },
        "102": {
            "title": "reducing latency via redundant requests exact analysis",
            "property": {
                "mechanism_tokens": ""
            }
        },
        "103": {
            "title": "the mixing method coordinate descent for low rank semidefinite programming",
            "property": {
                "mechanism_tokens": "In this paper , we propose a coordinate descent approach The approach , which we call the Mixing method , is extremely simple to implement , has no free parameters , and typically attains an order of magnitude or better improvement in optimization performance over the current state of the art ."
            }
        },
        "104": {
            "title": "Learning Temporal Alignment Uncertainty for Efficient Event Detection",
            "property": {
                "mechanism_tokens": "In this paper we propose a new representation that leverages the uncertainty in relative temporal alignments between pairs of sequences while not destroying temporal ordering Our representation , like BOW , is of a fixed dimensionality making it easily integrated with a linear detection function ."
            }
        },
        "105": {
            "title": "State Lattice with Controllers: Augmenting Lattice-Based Path Planning with Controller-Based Motion Primitives",
            "property": {
                "mechanism_tokens": "In this paper we present an expansion of the state lattice framework that allows us to incorporate controller-based motion primitives and external perceptual triggers directly into the planning process . We provide a formal description of our method of constructing the search graph in these cases"
            }
        },
        "106": {
            "title": "an automatic iris occlusion estimation method based on high dimensional density estimation",
            "property": {
                "mechanism_tokens": "In this work , we propose to use Figueiredo and Jain 's Gaussian Mixture Models ( FJ-GMMs ) We also explored possible features and found that Gabor Filter Bank ( GFB ) provides the most discriminative information for our goal Finally , we applied Simulated Annealing ( SA ) technique to optimize the parameters of GFB in order to achieve the best recognition rate ."
            }
        },
        "107": {
            "title": "quantifying the targeting performance benefit of electrostatic haptic feedback on touchscreens",
            "property": {
                "mechanism_tokens": ""
            }
        },
        "108": {
            "title": "algorithmic transparency via quantitative input influence theory and experiments with learning systems",
            "property": {
                "mechanism_tokens": "We develop a formal foundation Specifically , we introduce a family of Quantitative Input Influence ( QII ) measures that capture the degree of influence of inputs on outputs of systems . These measures provide a foundation for the design of transparency reports that accompany system decisions ( e.g. , explaining a specific credit decision ) and for testing tools useful for internal and external oversight ( e.g. , to detect algorithmic discrimination ) Distinctively , our causal QII measures carefully account for correlated inputs while measuring influence They support a general class of transparency queries and can , in particular , explain decisions about individuals ( e.g. , a loan decision ) and groups ( e.g. , disparate impact based on gender ) Finally , since single inputs may not always have high influence , the QII measures also quantify the joint influence of a set of inputs ( e.g. , age and income ) on outcomes ( e.g . loan decisions ) and the marginal influence of individual inputs within such a set ( e.g. , income ) . Since a single input may be part of multiple influential sets , the average marginal influence of the input is computed using principled aggregation measures , such as the Shapley value , previously applied to measure influence in voting Further , since transparency reports could compromise privacy , we explore the transparency-privacy tradeoff and prove that a number of useful transparency reports can be made differentially private with very little addition of noise ."
            }
        },
        "109": {
            "title": "Magnetically Actuated Soft Capsule With the Multimodal Drug Release Function.",
            "property": {
                "mechanism_tokens": "In this paper , we present a magnetically actuated multimodal drug release mechanism using a tetherless soft capsule endoscope Because the designed capsule has a drug chamber between both magnetic heads , if it is compressed by the external magnetic field , the capsule could release a drug in a specific position locally . The capsule is designed to release a drug in two modes according to the situation . In the first mode , a small amount of drug is continuously released by a series of pulse type magnetic field ( 0.01-0.03 T ) . In the second mode , about 800 mm ( 3 ) of drug is released by the external magnetic field of 0.07 T , which induces a stronger magnetic attraction than the critical force for capsule 's collapsing . As a result , a polymeric coating is formed around the capsule . The coated area is dependent on the drug viscosity ."
            }
        },
        "110": {
            "title": "human computable passwords",
            "property": {
                "mechanism_tokens": "We propose several candidate authentication protocols -- - a computer that stores information and performs computations correctly but does not provide confidentiality . Our schemes use a semi-trusted computer to store and display public challenges $ C_i\\in [ n ] ^k $ . The human user memorizes a random secret mapping $ \\sigma : [ n ] \\rightarrow\\mathbb { Z } _d $ and authenticates by computing responses $ f ( \\sigma ( C_i ) ) $ to a sequence of public challenges where $ f : \\mathbb { Z } _d^k\\rightarrow\\mathbb { Z } _d $ is a function that is easy for the human to evaluate . We prove that any statistical adversary needs to sample $ m=\\tilde { \\Omega } ( n^ { s ( f ) } ) $ challenge-response pairs to recover $ \\sigma $ , for a security parameter $ s ( f ) $ that depends on two key properties To obtain our results , we apply the general hypercontractivity theorem to lower bound the statistical dimension of the distribution over challenge-response pairs induced by $ f $ and $ \\sigma $ . Our lower bounds apply to arbitrary functions $ f $ ( not just to functions that are easy for a human to evaluate ) , and generalize recent results of Feldman et al ."
            }
        },
        "111": {
            "title": "Recognition of Human Group Activity for Video Analytics",
            "property": {
                "mechanism_tokens": "In this paper , a novel human group activity recognition method is proposed this paper proposes three types of group-activity descriptor using motion trajectory and appearance information of people ."
            }
        },
        "112": {
            "title": "education learning and information theory",
            "property": {
                "mechanism_tokens": "and we provide a metric for comparing different approaches based on information theory . We also design a multi-pronged algorithm , HYTRA , for this problem . Our proposed HYTRA is scalable ( near-linear in the dataset size ) , and it is intuitive , conforming to well-known educational principles , such as grouping related concepts , and `` comparing '' and `` contrasting '' ."
            }
        },
        "113": {
            "title": "revisit behavior in social media the phoenix r model and discoveries",
            "property": {
                "mechanism_tokens": "Secondly , we propose the Phoenix-R model Phoenix-R has the desired properties of being : ( 1 ) parsimonious , being based on the minimum description length principle , and achieving lower root mean squared error than state-of-the-art baselines ; ( 2 ) applicable , the model is effective for predicting future popularity values of objects ."
            }
        },
        "114": {
            "title": "subset selection via implicit utilitarian voting",
            "property": {
                "mechanism_tokens": "We extend this approach to the design of rules that select a subset of alternatives . We derive analytical bounds on the performance of optimal ( deterministic as well as randomized ) rules in terms of two measures , distortion and regret ."
            }
        },
        "115": {
            "title": "Apoptosis Detection for Non-adherent Cells in Time-lapse Phase Contrast Microscopy",
            "property": {
                "mechanism_tokens": "This paper proposes a vision-based method for detecting apoptosis ( programmed cell death ) , Our method targets non-adherent cells , which float or are suspended freely in the culture medium-in contrast to adherent cells , which are attached to a petri dish . The method first detects cell regions and tracks them over time , resulting in the construction of cell tracklets . For each of the tracklets , visual properties of the cell are then examined to know whether and when the tracklet shows a transition from a live cell to a dead cell , in order to determine the occurrence and timing of a cell death event ."
            }
        },
        "116": {
            "title": "Distributed Representation-based Spoken Word Sense Induction",
            "property": {
                "mechanism_tokens": "In this paper we present a fully unsupervised SWSI approach based on distributed representations of spoken utterances To determine how ASR performance affects SWSI , we used three different levels of Word Error Rate ( WER ) , 40\\ % , 20\\ % and 0\\ % ; 40\\ % WER is representative of online video , 0\\ % of text"
            }
        },
        "117": {
            "title": "cdrem inferring dynamic combinatorial gene regulation",
            "property": {
                "mechanism_tokens": "Here we present cDREM , a new method cDREM integrates time series gene expression data with ( static ) protein interaction data . The method is based on a hidden Markov model and utilizes the sparse group Lasso to identify small subsets of combinatorially active TFs , their time of activation , and the logical function they implement"
            }
        },
        "118": {
            "title": "one size does not fit all averaged data on household electricity is inadequate for residential energy policy and decisions",
            "property": {
                "mechanism_tokens": ""
            }
        },
        "119": {
            "title": "the impact of timing on the salience of smartphone app privacy notices",
            "property": {
                "mechanism_tokens": ""
            }
        },
        "120": {
            "title": "sportsnetrank network based spor

            function addId(key) {
                var y = document.createElement("TR");
                var yId = "ID" + key.toString();
                y.setAttribute("id", yId);
                document.getElementById("myTable").appendChild(y);
                var z = document.createElement("TD");
                var t = document.createTextNode("Paper ID: " + (key).toString());
                z.appendChild(t);
                z.style.backgroundColor = "#F5F5F5";
                z.style.fontSize = "x-large";
                document.getElementById(yId).appendChild(z);
            }

            function addLine(key) {
                var y = document.createElement("TR");
                var yId = "dummy" + key.toString();
                y.setAttribute("id", yId);
                document.getElementById("myTable").appendChild(y);
                var z = document.createElement("TD");
                z.setAttribute("height", "30px");
                z.setAttribute("bgcolor", "#000000");
                document.getElementById(yId).appendChild(z);
            }

            function addTitle(item, i) {
                var y = document.createElement("TR");
                var yId = "title" + i.toString();
                y.setAttribute("id", yId);
                document.getElementById("myTable").appendChild(y);
                var z = document.createElement("TD");
                var t = document.createTextNode("Title : " + item.title);
                z.appendChild(t);
                z.style.backgroundColor = "#F5F5F5";
                z.style.fontSize = "x-large";
                document.getElementById(yId).appendChild(z);
            }

            function addProperty(item, i) {
                var y = document.createElement("TR");
                var yId = "abstract" + i.toString();
                y.setAttribute("id", yId);
                document.getElementById("myTable").appendChild(y);
                //    console.log(item.property.Mechanism);
                if (item.property.hasOwnProperty('background_tokens')) {
                    addBackground(item.property, yId);
                }
                if (item.property.hasOwnProperty('Findings')) {
                    addFindings(item.property, yId);
                }
                if (item.property.hasOwnProperty('mechanism_tokens')) {
                    addMechanism(item.property, yId);
                }
                if (item.property.hasOwnProperty('Method')) {
                    addMethod(item.property, yId);
                }
                if (item.property.hasOwnProperty('problem_tokens')) {
                    addProblem(item.property, yId);
                }
                if (item.property.hasOwnProperty('Purpose')) {
                    addPurpose(item.property, yId);
                }
            }

            function addPurpose(item, yId) {
                var z0 = document.createElement("p");
                var t0 = document.createTextNode("Purpose");
                z0.appendChild(t0);
                z0.style.fontSize = "x-large";
                document.getElementById(yId).appendChild(z0);
                var z = document.createElement("p");
                var t = document.createTextNode(item.Purpose);

                z.appendChild(t);
                z.style.fontSize = "x-large";
                z.style.backgroundColor = "#ffb3b3";
                document.getElementById(yId).appendChild(z);
            }

            function addBackground(item, yId) {
                var z0 = document.createElement("p");
                var t0 = document.createTextNode("Background");
                z0.appendChild(t0);
                z0.style.fontSize = "x-large";
                document.getElementById(yId).appendChild(z0);
                var z = document.createElement("p");
                var t = document.createTextNode(item.Purpose);

                var z = document.createElement("p");
                var t = document.createTextNode(item.background_tokens);
                z.appendChild(t);
                z.style.fontSize = "x-large";
                z.style.backgroundColor = "lightblue";
                document.getElementById(yId).appendChild(z);
            }

            function addFindings(item, yId) {
                var z0 = document.createElement("p");
                var t0 = document.createTextNode("Purpose");
                z0.appendChild(t0);
                z0.style.fontSize = "x-large";
                document.getElementById(yId).appendChild(z0);
                var z = document.createElement("p");
                var t = document.createTextNode(item.Purpose);
                var z = document.createElement("p");
                var t = document.createTextNode(item.Findings);
                z.appendChild(t);
                z.style.fontSize = "x-large";
                z.style.backgroundColor = "#ff6666";
                document.getElementById(yId).appendChild(z);
            }

            function addMechanism(item, yId) {
                var z0 = document.createElement("p");
                var t0 = document.createTextNode("Mechanism");
                z0.appendChild(t0);
                z0.style.fontSize = "x-large";
                document.getElementById(yId).appendChild(z0);
                var z = document.createElement("p");
                var t = document.createTextNode(item.Purpose);
                var z = document.createElement("p");
                var t = document.createTextNode(item.mechanism_tokens);
                z.appendChild(t);
                z.style.fontSize = "x-large";
                z.style.backgroundColor = "lightgreen";
                document.getElementById(yId).appendChild(z);
            }

            function addMethod(item, yId) {
                var z0 = document.createElement("p");
                var t0 = document.createTextNode("Method");
                z0.appendChild(t0);
                z0.style.fontSize = "x-large";
                document.getElementById(yId).appendChild(z0);
                var z = document.createElement("p");
                var t = document.createTextNode(item.Purpose);
                var z = document.createElement("p");
                var t = document.createTextNode(item.Method);
                z.appendChild(t);
                z.style.fontSize = "x-large";
                z.style.backgroundColor = "#ffb84d";
                document.getElementById(yId).appendChild(z);
            }

            function addProblem(item, yId) {
                var z0 = document.createElement("p");
                var t0 = document.createTextNode("Problem");
                z0.appendChild(t0);
                z0.style.fontSize = "x-large";
                document.getElementById(yId).appendChild(z0);
                var z = document.createElement("p");
                var t = document.createTextNode(item.Purpose);
                var z = document.createElement("p");
                var t = document.createTextNode(item.problem_tokens);
                z.appendChild(t);
                z.style.fontSize = "x-large";
                z.style.backgroundColor = "#bb99ff";
                document.getElementById(yId).appendChild(z);
            }


            $(document).ready(function () {
                //    console.log( "ready!" );
                //    console.log(dummy_json); 
                for (var key in dummy_json) {
                    if (dummy_json.hasOwnProperty(key)) {
                        var x = document.createElement("TABLE");
                        x.setAttribute("id", "myTable");
                        document.body.appendChild(x);
                        var item = dummy_json[key];
                        console.log(item);
                        addId(key);
                        addTitle(item, key);
                        addProperty(item, key);
                        addLine(key);
                    }
                }
            });
