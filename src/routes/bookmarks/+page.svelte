<script lang="ts">
import Note from "$lib/components/note.svelte"
import List from "$lib/components/bookmark_list.svelte"
</script>

<p> Some extremely helpful and/or interesting stuff that I've found throughout the internet! </p>
    <br/>
    <br/>

<List caption="Articles and Books" bookmarks={[
    {
        title: "Tomas Akenine-Möller —  Real-Time Rendering, 4th Edition", 
        description: "Description", 
        link: "https://www.amazon.com/Real-Time-Rendering-Fourth-Tomas-Akenine-M%C3%B6ller/dp/1138627003"
    },
    {  
        title:"GPU Zen 4: Advanced Rendering Techniques, by  Wolfgang Friedrich Engel",
        description: "...",
        link: "https://www.amazon.com/GPU-Zen-Advanced-Rendering-Techniques/dp/B0GNZJPVZ4",
    },
    { link: "https://www.amazon.com/exec/obidos/ASIN/1482250926", title:"Essential Mathematics for Games and Interactive Applications, by James M. Van Verth ", description: "..."},
    { link: "https://raytracing.github.io/books/RayTracingInOneWeekend.html",title:"Ray Tracing in One Weekend (and beyond), by Peter Shirley", description: "..."},
    { link: "https://gamephysicsweekend.github.io/",title:"Game Physics in One Weekend (and beyond), by Gregory Hodges", description: "..."},
    { link: "https://people.freebsd.org/~lstewart/articles/cpumemory.pdf",title:"What every programmer should know about memory", description: "..."},
    { link: "https://www.amazon.com/Large-Scale-Software-Design-John-Lakos/dp/0201633620",title:"Large-Scale C++ Software Design", description: "..."},

]}
/>

<List caption="Youtube" bookmarks={[
{link: "https://www.youtube.com/watch?v=fNk_zzaMoSs&list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab" ,title:"3Blues1Brown - Essence of Linear Algebra", description:"..."},
{link: "https://www.youtube.com/watch?v=WUvTyaaNkzM&list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr" ,title:"3Blues1Brown - Essence of Calculus", description:"..."},
{link: "https://www.youtube.com/watch?v=aircAruvnKk&list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi&pp=0gcJCf4COCosWNin" ,title:"3Blues1Brown - Neural Networks", description:"..."},
{link: "https://www.youtube.com/@CppCon" ,title:"CppCon", description:"..."},
{link: "https://www.youtube.com/@GMTK" ,title:"Game Maker's Toolkit", description:"..."},
{link: "https://www.youtube.com/@CGPGrey" ,title:"CGPGrey", description:"..."},
{link: "https://www.youtube.com/@lauriewired" ,title:"Laurie Wired", description:"..."},
{link: "https://www.youtube.com/watch?v=51u9ZgrEThg&list=PLmac3HPrav-9UWt-ahViIZxpyQxJ2wPSH" ,title:"Pixel Pete - Pixel Art 101", description:"..."},
{link: "https://www.youtube.com/watch?v=7BWr2tlK-4c&list=PLLdxW--S_0h4dlWUpl-TzBp-ulqK3NiM_" ,title:"AdamCYounis - Pixel Art Class", description:"..."},
]}
/>

<List caption="Software Architecture" bookmarks={[
    {link: "https://refactoring.guru/refactoring",title:"Refactoring Guru — Refactoring", description:"A process of improving code without creating new functionality."},
    {link: "https://refactoring.guru/design-patterns",title:"Refactoring Guru — Design Patterns", description:"Typical solutions to common problems in software design."},
    {link: "https://skypjack.github.io/2019-02-14-ecs-baf-part-1/", title:"Michele Caini (skypjack) — ECS back and forth (article series)", description: "The how-to's of creating an entity component system, by the creator of EnTT"}
    ]}
/>


<List caption="Entity Component System" bookmarks={[
{link: "https://skypjack.github.io/2019-02-14-ecs-baf-part-1/",title:"Part 1 — Introduction", description:""},
{link: "https://skypjack.github.io/2019-03-07-ecs-baf-part-2/",title:"Part 2 — Where are my entities", description:""},
{link: "https://skypjack.github.io/2019-03-21-ecs-baf-part-2-insights/",title:"Part 2, insights — Sparse sets and grouping functionalities", description:""},
{link: "https://skypjack.github.io/2019-05-06-ecs-baf-part-3/",title:"Part 3 — Why you don't need to store deleted entities", description:""},
{link: "https://skypjack.github.io/2019-06-25-ecs-baf-part-4/",title:"Part 4 — Hierarchies", description:""},
{link: "https://skypjack.github.io/2019-08-20-ecs-baf-part-4-insights/",title:"Part 4, insights — Hierarchies and beyond", description:""},
{link: "https://skypjack.github.io/2019-09-25-ecs-baf-part-5/",title:"Part 5 — Sparse sets and sorting", description:""},
{link: "https://skypjack.github.io/2019-11-19-ecs-baf-part-6/",title:"Part 6 — Nested groups and perfect SoA to the rescue", description:""},
{link: "https://skypjack.github.io/2020-02-02-ecs-baf-part-7/",title:"Part 7 — Shared dat", description:""},
{link: "https://skypjack.github.io/2020-03-14-ecs-baf-part-8/",title:"Part 8 — Type Id", description:""},
{link: "https://skypjack.github.io/2020-08-02-ecs-baf-part-9/",title:"Part 9 — Sparse sets and EnTT", description:""},
{link: "https://skypjack.github.io/2021-02-27-ecs-baf-part-10/",title:"Part 10 — Hybrid storage", description:""},
{link: "https://skypjack.github.io/2021-06-12-ecs-baf-part-11/",title:"Part 11 — The Big Matrix revised", description:""},
{link: "https://skypjack.github.io/2021-08-29-ecs-baf-part-12/",title:"Part 12 — Introduction to sparse sets and pointer stability", description:""},
{link: "https://skypjack.github.io/2021-10-09-ecs-baf-part-13/",title:"Part 13 — No policy is the best policy", description:""},
]}/>
<!-- <p>Michele skypjack Caini — ECS Back & Forth </p> -->

<List caption="Hardware Architecture" bookmarks={[
    {link: "https://people.freebsd.org/~lstewart/articles/cpumemory.pdf",title:"Ulrich Drepper. Red Hat, Inc — What Every Programmer Should Know About Memor", description:"The structure of memory subsystems, illustrating why CPU caches were developed, how they work, and what you should do to achieve optimal performance."},
]}/>

<List caption="Mathematics" bookmarks={[
    {link: "https://www.youtube.com/watch?v=WUvTyaaNkzM&list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr" ,title:"3Blue1Brown — The Essence Of Calculus", description:"Intuitive understanding of calculus subjcets with visuals."},
    {link: "https://www.youtube.com/watch?v=fNk_zzaMoSs&list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab?" ,title:"3Blue1Brown — The Essence of Linear Algebr", description:"Intuitive understanding of linear algebra subjcets with visuals."},
    {link: "https://www.youtube.com/watch?v=2hBWCCAiCzQ&list=PLVuwZXwFua-0Ks3rRS4tIkswgUmDLqqRy",title:"sudgylacmoe — From Zero to Ge", description:"Geometric algebra video series ."},
]}/>

<List caption="Graphics Programming" bookmarks={[
    {link: "https://www.realtimerendering.com/",title:"Tomas Akenine-Möller — Realtime Renderin", description:"..."},
]}/>

<List caption="C++" bookmarks={[
    {link: "https://www.youtube.com/@CppCon",title:"Community — CppCon", description:"The C++ Conference"},
    {link: "https://godbolt.org/",title:"Matt Godbolt — Compiler Explore", description:"The infamous online compiler. Use it to compile your code using any compilers and see the outputted assembly, or even run it."},
]}/>


<List caption="Frontend" bookmarks={[
    {link: "https://lucide.dev/",title:"Community — Lucide Icon", description:"Beautiful and consistent icons."},
    {link: "https://www.placekittens.com/",title:"Mark James — Place Kitten", description:"Service for getting placeholder images of _kittens_ ^~^"},
    {link: "https://placebacon.net/",title:"Will Anderson — Place Baco", description:"Service for getting placeholder images of _bacons_."},
]}/>
