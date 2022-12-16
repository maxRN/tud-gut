<script lang="ts">
    import { getCurrentDs, getLecturesForPeriod, Room } from "../timeAndDate";

    export let room: Room;

    // TODO maybe this should be an API?
    function freeUntil(lectures: string[], dsStart: number) {}

    const currentDs = parseInt(getCurrentDs(new Date()));
    const weekday = new Date().getDay();

    const currentLecture = getLecturesForPeriod(room, currentDs)[weekday - 1];

    const roomFree = weekday == 0 || weekday == 6 || currentLecture === "";
</script>

<div class="occupation-card">
    <span>
        {#if roomFree}
            <h2 id="room-status-current">
                Room is <span class="room-free">free!</span>
            </h2>
        {:else}
            <h2 id="room-status-current">
                Room is <span class="occupied">occupied!</span>
            </h2>
        {/if}
    </span>
</div>

<style>
    .occupation-card {
        list-style: none;
        display: flex;
        padding: 0.15rem;
        background-color: white;
        background-image: var(--accent-gradient);
        background-size: 400%;
        border-radius: 0.5rem;
        background-position: 100%;
        transition: background-position 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -2px rgba(0, 0, 0, 0.1);
    }

    .occupation-card > span {
        width: 100%;
        text-decoration: none;
        line-height: 1.4;
        padding: 1rem 1.3rem;
        border-radius: 0.35rem;
        color: #111;
        background-color: white;
        opacity: 0.8;
    }
    h2 {
        margin: 0;
        font-size: 1.25rem;
        transition: color 0.6s cubic-bezier(0.22, 1, 0.36, 1);
    }
    p {
        margin-top: 0.5rem;
        margin-bottom: 0;
        color: #444;
    }
    .occupation-card:is(:hover, :focus-within) {
        background-position: 0;
    }
    .occupation-card:is(:hover, :focus-within) h2 {
        color: rgb(var(--accent));
    }
    .occupied {
        color: red;
    }
    .room-free {
        color: green;
    }
</style>
