<script lang="ts">
    import { getCurrentDs } from "../timeAndDate";
    import type { Room } from "../timeAndDate";
    import RoomCard from "./RoomCard.svelte";

    export let backendURL: string;

    const currentDs = getCurrentDs(new Date());

    console.log(backendURL);
    async function fetchFreeRooms(currentDs: number) {
        const url = new URL("/freeRoom", backendURL);
        url.searchParams.append("building", "APB");
        url.searchParams.append("period", currentDs.toString());

        const res = await fetch(url.href);
        const rooms: Room[] = await res.json();
        return rooms;
    }

    const freeRooms = fetchFreeRooms(currentDs);
</script>

{#await freeRooms}
{:then rooms}
    {#each rooms as room}
        <RoomCard {room} />
    {:else}
        <div>No Free Rooms Available!</div>
    {/each}
{:catch error}
    <div>Error during loading: {error}</div>
{/await}
